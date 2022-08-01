# Type Unification

Unification is the process of testing whether one type implies another.
Sometimes unification is written as A <: B, which is called subsumption.
For our use we tend towards arrow notation A => B which is called implication.
The primary difference between the two is the directionality of the operation.
A <: B is equivalent to B => A, for the extent of our usage at least.

In LSTS we often use the term Property and Type interchangeably.
The primary difference in usage between these two concepts is how they are attached to Terms.
A Term can typically have many properties.
A Term can typically have only one type.
We break this convention when we say that Types *are* Properties.
In LSTS, Terms have multiple Properties.
Equivalently, Terms have multiple Types.

This would be all well and good if there were no consequences to this breaking from convention.
There are consequences however.
Due to these consequences we sometimes need to say, *there can only be one type*.

One case where you can only have one type is in a normal kind.
It does not make much sense to say that a term is both a Second and a Metre.
A measurement can only have one Unit.
We extend this principal to apply to all normal kinds.
Normal kinds can only be inhabited by a single Type.

A similar situation appears when we talk about representation of Terms.
It is OK to say that a term is an Odd Integer, but not a String Integer.
Both String and Integer are *valued types*.
Valued Types have a representation and imply a value.
Terms are only allowed to have one Valued Type.
Valued Types are sometimes called Data Types.
Data Types are singular.

This preface is all we need to explain before even getting started to talk about unification.
Unification is the beating heart of LSTS and it is very important that we get it right.

### Unification, as implemented

First let's look at the structure of a Type before we start moving anything around.

```lsts
type Type =
     Any
   | Named(String,Type[])
   | And(Type[])
   | Arrow(Type,Type)
   | Tuple(Type[])
   | Product(Type[])
   | Ratio(Type,Type)
   | Constant(Term)
```

Bottom is represented as the empty conjunctive.
Tuple is order-sensitive.
Nil is represented as the empty tuple.
Product is order-insenstive.

Unification is represented as the binary arrow operator: A => B.
However, before we can start unification we must satisfy some preconditions.
The following function gets called before any unification.

```lsts
let apply_preconditions( left_type: Type, right_type: Type ) = {
    //rewrite Types with implied types explictly included
    //A + A => B will be rewritten as A + B
    expand_subtypes( left_type );               
    expand_subtypes( right_type );

    //Constant types will be evaluated and normalized
    //Constants may not become a Value, but they will be normal
    reduce_constant_expressions( left_type );
    reduce_constant_expressions( right_type ); 

    //Types will be converted into CNF
    //Products and Ratios will be reduced and ordered
    normalize( left_type ); 
    normalize( right_type );

    //Assert that all preconditions are satisfied
    //Check that Type is in CNF
    //Check that Normal Kinds and Data Types are singular
    assert_preconditions( left_type );
    assert_preconditions( right_type );
}
```

The actual unification function can be very fragile in some cases.
How each case is treated has an outsized effect on the rest of our codebases.

```lsts
let $"=>"(left_type: Type, right_type: Type): Type {
   match (left_type, right_type) {

      //the bottom type implies nothing
      (And(lts), _) if lts.length==0 => { raise TypeError("Bottom implies nothing") },

      //any type implies Any type
      (l, Any) => { l },

      //type variables get substituted for their greatest-common-denominator
      (Named(lv,lps), rt) if lv.is_uppercase => {
         if lv in substitutions {
            substitutions[lv] = gcd(substitutions[lv], rt)
         } else {
            substitutions[lv] = rt
         };
         substitutions[lv]
      },
      (lt, Named(rv,rps)) if rv.is_uppercase => {
         if rv in substitutions {
            substitutions[rv] = gcd(lt, substitutions[rv])
         } else {
            substitutions[rv] = lt
         };
         substitutions[rv]
      },

      //And Unification has highest precedence
      (_, And(rts) as rt) if rts.length==0 => { rt },
      (And(lts) as lt, And(rts)) => {
         let mts = [];
         for rt in rts {
            match lt => rt {
               And(tts) => { mts.append(tts); },
               tt => { mts.push(tt); },
            }
         }
         mts.sort(); mts.dedup();
         if mts.length==0 { raise TypeError("nothing implies Bottom") }
         else if mts.length==1 { mts[0] }
         else { And(mts) }
      },
      (And(lts), rt) => {
         let mts = [];
         for ltt in lts {
            //it is OK if everything doesn't unify
            //it is not OK if nothing unifies
            if let Ok(nt) = try {ltt => rt} {
               match nt {
                  And(tts) => { mts.append(tts); },
                  tt => { mts.push(tt); },
               }
            }
         }
         mts.sort(); mts.dedup();
         if mts.length==0 { raise TypeError("nothing implies Bottom") }
         else if mts.length==1 { mts[0] }
         else { And(mts) }
      },
      (lt, And(rts)) => {
         let mts = [];
         for rt in rts {
            if let Ok(nt) = try {lt => rt} {
               match nt {
                  And(tts) => { mts.append(tts); },
                  tt => { mts.push(tt); },
               }
            } else {
               raise TypeError("Implicit Narrowing of And Types is not permitted on the right")
            }
         }
         mts.sort(); mts.dedup();
         if mts.length==0 { raise TypeError("nothing implies Bottom") }
         else if mts.length==1 { mts[0] }
         else { And(mts) }
      }

      //Ratio Types have next precedence
      (Ratio(nl,dl), Ratio(nr,dr)) => {
         Ratio(nl => nr, dl => dr)
      },
      (lt, Ratio(nr,Tuple(dr))) if dr.length==0 => {
         lt => nr
      },

      //Everything else is a mixed bag
      (Named(lv,lps), Named(rv,rps)) if lv==rv && lps.length==rps.length => {
         Named(lv, [for (lp,rp) in zip(lps,rps) yield (lp => rp)])
      }
      (Arrow(pl,bl), Arrow(pr,br)) => {
         Arrow(pl => pr, bl => br)
      },
      (Product(la), Product(ra)) if la.length==ra.length => {
         Product([for (lt,rt) in zip(la,ra) yield (lt => rt)]
      },
      (Tuple(la), Tuple(ra)) if la.length==ra.length => {
         Tuple([for (lt,rt) in zip(la,ra) yield (lt => rt)]
      },
      (Constant(lt), Constant(rt)) => {
         if lt == rt {
            Constant(lt)
         } else {
            raise TypeError("Constant Types are not equal")
         }
      }
   }
}
```
