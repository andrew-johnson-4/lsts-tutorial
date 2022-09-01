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

In the Assumptions and Conclusions method of proof verification, the skolem function goes after the assumptions.
This is equivalent to saying "forall universal quantifiers and some assumptions, there exists a skolem function".

```lsts
let some_proof <A:Integer,B:Odd,C:Prime> (
   assumption1: Property1<A,B>):
   Conclusion<A,B,C> = {
   let skolem1: A => Integer;
   //Here we will derive the conclusion
   //starting from the assumptions
}
```
