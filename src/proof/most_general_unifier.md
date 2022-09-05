# Most General Unifier

The Most General Unifier of two type expressions is an intersection of their statements.
The MGU is sort of like a Least Common Denominator for logical expressions.
MGU is used to unify type variables that appear in multiple places.

```lsts
let $"if"(cond: Boolean, branch1: T, branch2: T): T
```

In the above definition the two branches are unified by a single type variable.
This single type variable cannot be too specific.
Every statement that appears in branch1's version of T must also appear in branch2's version of T.
New information should not be introduced in between these branches.
The best result of unification here will always be the MGU of branch1 and branch2.
This MGU result then goes on to become the return type of the if statement.

### MGUs by example

A type expression, intersected with itself, will always yield itself, and its full self.

```lsts
? | ? = ?
A | A = A
Aa | Aa = Aa
Aa + Bb | AA + Bb = AA + Bb
Aa -> Bb | Aa -> Bb = Aa -> Bb
(Aa,Bb) | (Aa,Bb) = (Aa,Bb)
Aa*Bb | Aa*Bb = Aa*Bb
Aa/Bb | Aa/Bb = Aa/Bb
[1] | [1] = [1]
```
