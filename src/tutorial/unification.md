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

Before unification we must satisfy some preconditions.

```lsts
let apply_preconditions( left_type: Type, right_type: Type ) {
    expand_subtypes( left_type );               //rewrite Type with implied types explictly included
    expand_subtypes( right_type );              //A + A => B will be rewritten as A + B

    reduce_constant_expressions( left_type );   //Constant types will be evaluated and normalized
    reduce_constant_expressions( right_type );  //Constants may not become a Value, but they will be normal

    normalize( left_type );                     //Types will be converted into CNF
    normalize( right_type );                    //Products and Ratios will be reduced and ordered
}
```
