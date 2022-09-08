## Operations on Kinds

Sometimes we need to manipulate Kinds or check their properties.
For this we have several operations that work on Kinds.
The definition for Kinds is very simple.
Kinds can be Nil, Named, or multiple Named.

```lsts
type Kind =
     Nil
   | Named(String,Kind[])
   | And(Kind[])
```

The first operation on Kinds is the implication operator.
This is similar to the Type implication operator, just much simpler.
If a first Kind contains all of the second Kind, then the first implies the second.

```lsts
let $"=>"(left_kind: Kind, right_kind: Kind): Boolean = {
   match (left_kind, right_kind) {
      (_, Nil) => { True },
      (Nil, _) => { False },
      (Named(_), Named(_)) => { left_kind == right_kind },
      (And(ks), Named(_)) => { right_kind in ks },
      (Named(_), And(ks)) => { False },
      (And(lks), And(rks)) => { rks in lks },
   }
}
```

The second significant operation on Kinds is conjoining two Kinds.

```lsts
let $"+"(left_kind: Kind, right_kind: Kind): Kind = {
   match (left_kind, right_kind) {
      (_, Nil) => { left_kind },
      (Nil, _) => { right_kind },
      (Named(_), Named(_)) => { And([left_kind, right_kind]) },
      (And(ks), Named(_)) => { And(ks.append(right_kind)) },
      (Named(_), And(ks)) => { And(ks.append(left_kind)) },
      (And(lks), And(rks)) => { And(lks + rks) },
   }
}
```
