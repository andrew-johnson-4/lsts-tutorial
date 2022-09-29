## Rules Based Logic

Proofs in LSTS are built by connecting type definitions to quantified statements.
Types are logic at rest.
Quantifed Statements are logic in motion.
A Type knows what it is.
A Statement shows what it is.

### Types

Type definitions define logical statements that are then attached to Terms.
All valid Terms have at least one Type.
Some Terms may have more than one Type.
Types may define invariant properties.
These invariant properties impose preconditions and postconditions on what values may occupy that Type.
Values going into a Type must satisfy that Type's preconditions.
Values coming out of a Term are then known to have satisfied each Types' invariants.

```lsts
type Even: Integer
     where self % 2 | 0;
type Odd: Integer
     where self % 2 | 1;
```

### Quantified Statements

Quantified Statements connect logic to form conclusions.
Each Quantified Statement has a Term part and a Type part.
A Quantified Statement may optionally have a label so it can be referenced directly later.
Quantified Statements, when applied, provide new information to the Type of a Term.
When a Quantified Statement is applied, it must match the pattern of its application context.
An application context consists of a Term and a Type, which is then compared to the Term and Type of the Statement.
These Term x Type relations form the basis of strict reasoning for LSTS.

```lsts
forall @inc_odd x: Odd. Even = x + 1;
forall @dec_odd x: Odd. Even = x - 1;
forall @inc_even x: Even. Odd = x + 1;
forall @dec_even x: Even. Odd = x - 1;

((x: Even) + 1) @inc_even : Odd
```
