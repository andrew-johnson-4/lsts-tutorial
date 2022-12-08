## Soundness Guarantees

Soundness is defined here as "only True statements can be proven".

Currently there is no constructive proof of the logical soundness of the type system.
Similarly there is currently no proof that the type system is strongly normalizing.

While many of these things may improve with time, there are some unique challenges that LSTS faces.
Most of these problems stem from the fact that the user is allowed to ascribe multiple types to terms.

### Why are multiple types a problem?

When you have multiple types, it is possible to create a type signature that can only be satisfied by multiple values.
LSTS does not permit multiple valued terms, and the suggestion is fairly absurd.
What should happen in this case is that LSTS should issue a Type Error and terminate.
Currently this does not always happen.

For example, a term can not be both an Integer and a String. The following code can't be satisfied.

```lsts
let x: Integer + String;
```

The previous example may seem trivial, but this problem is not always so obvious.
Take for example the exclusive definitions of Even and Odd.

```lsts
let x: Even + Odd;
```

No single number is both Even and Odd.
However, to prove this we need to do some algebra with the definition of Even and Odd.
The contradiction here, or in an even more contrived contradiction, is not trivial.

### So what do we do?

LSTS issues Type Errors when it sees a problem.
It may need some help in seeing the contradiction.
This is what extended proofs are for.
There is no end-all for squashing contradictions here.
