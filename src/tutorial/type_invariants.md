# Type Invariants

Type invariants carry a lot of the weight of proofs in practice.
Type invariants are inherently dependently typed.
A Dependent Type describes a subset of the values of a Total Type.

A Total Type describes *all values that can be represented*.
UnsignedInteger32 would be a Total Type.
UnsignedInteger32 can represent all 32-bit unsigned integers.

By comparison, a dependent type, or implicitly any type with invariants, would not be Total.
Odd numbers are a subset of all Integers.
Odd numbers might be represented as Integers, but not all Integers are Odd.

```lsts
987654321 : Odd + Integer
```

Type Invariants are dependent properties that are attached to a type definition.
The definition of Odd is as follows:

```lsts
type Odd: Integer
   where self%2 | 1
```

Multiple properties can be attached to the same type definition.

```lsts
type Factor23: Integer
   where self%2 | 0
   and   self%3 | 0;
```

The *self* keyword represents some value of the declared type.
The bar syntax indicates that the preceding expression produces the following expression.
When a value is bound by a type that has invariants, each invariant is checked as a *precondition* to satisfy that type.
If a bound value does not satisfy its type's preconditions, then an error will occur.

*Postconditions* are the dependent properties that we know about any given value.
We may not know the exact value of a term, however we may know some of its properties.
When this happens, we can often use the postconditions of a type to complete a proof.

In the above example of Factor23, we know that any value of that type will divide evenly into 2 and 3.
This can be used as part of a proof, or in a program it can be used for constant folding.

```lsts
let x:Factor23;
if x%2 == 0 then {
   //yes, always this branch
} else {
   //no, never this branch
}
```
