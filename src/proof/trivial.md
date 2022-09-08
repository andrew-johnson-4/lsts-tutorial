## Trivial Proofs

Some proofs are so simple that just stating the goal is enough for our system to infer the validity of the proof.
Most commonly this happens with value manipulation where constant folding will infer that a statement is true without any further work from the programmer.

```lsts
forall x:Integer. x + 0 == x;

forall x:Integer, y:Integer. x + y == y + x;

forall x:Integer, y:Integer, z:Integer. x + y + z == z + y + x;
```

Q.E.D.
