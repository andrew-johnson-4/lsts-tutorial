# Skolemization in Proofs

Skolemization is, rougly speaking, the practice of writing existential quantifiers as arrow types.
This helps simplify our type system by eliminating existential quantifiers.

```lsts
forall x:X. exists y:X. x + y == x^2
```

becomes

```lsts
let g: X => X;
forall x:X. x + g(x) == x^2
```

