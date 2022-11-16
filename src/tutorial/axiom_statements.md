## Axiom Statements

Axioms don't need to be proven by deduction.
The assumption that an axiom is valid is the only difference between an axiom and a theorem.
Axioms are a well researched topic in mathematical logic; 
if an axiom from a prelude is unfamiliar to you, then don't use it.
Be warned though that familiar axioms may look a bit different when declared in LSTS.
LSTS is very strict, whereas things like the basic axioms of algebra are usually defined casually.
Preludes will also define axioms differently for each use-case.

### Deduction

All theorems in a Strict LSTS proof can be thought of as a single tree branching out from the axioms.
All theorems must be derived from axioms, definitions, or other well-founded theorems.
Cycles are not allowed in this tree of theorems, all theorems must lead straight to axioms.

### Preludes

Choosing axioms is one of the most important parts of defining a prelude.
Not all axioms are appropriate for all preludes.
For this reason some preludes are incompatible with each other.
