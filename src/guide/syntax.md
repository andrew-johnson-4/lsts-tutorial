## LSTS Syntax

LSTS syntax is derived from Lambda Calculus.
Extensions to the Lambda Calculus syntax are modelled after those from previous languages also derived from Lambda Calculus.
Some of these languages include Coq, ML, and Haskell.

### Terms

Terms are all desugared into Lambda Calculus expressions.

```lsts
1;
"abc";
2 + 3;
"[" + (for x in range(1,25) yield x^3).join(",") + "]";
```

The iterator syntax and method call are all rewritten as a Lambda Calculus expression.

### Types

Type definitions define logical statements that are then attached to Terms.
All valid Terms have at least one Type.
Some Terms may have more than one Type.
Types may define invariant properties.
These invariant properties impose preconditions and postconditions on what values may occupy that Type.
Values going into a Type must satisfy that Type's preconditions.
Values coming out of a Term are then known to have satisfied each Type's invariants.

```lsts
type Prime: Integer
   where self > 1
   and   a:Integer. 2>a || a>self-1 || self%a != 0
```

### Statements

Statements connect logic to form conclusions.
Each Statement has a Term part and a Type part.
A Statement may optionally have a label so it can be referenced directly later.
Statements, when applied, provide new information to the Type of a Term.
When a Statement is applied, it must match the pattern of its application context.
An application context consists of a Term and a Type, which is then compared to the Term and Type of the Statement.
These Term x Type relations form the basis of strict reasoning for LSTS.

```lsts
forall @inc_odd x: Odd. Even = x + 1;
forall @dec_odd x: Odd. Even = x - 1;
forall @inc_even x: Even. Odd = x + 1;
forall @dec_even x: Even. Odd = x - 1;

((8: Even) + 1) @inc_even : Odd
```
