## Statements

Statements apply logic to connect Terms and Types.
LSTS Statements provide rich algebraic manipulation of Terms and Types.
Statements can be either logical theorems or axioms.

```lsts
axiom @reflexive a:A. [True] = a == a;

forall @reflexive_int a:Integer. [True] = a == a @reflexive;
```

### Syntax

A Statement is formed by constructing

* The keyword axiom or forall
* An optional label
* Optional parameters
* The concluding Type
* The Term definition

### Deduction

In Strict Mode statements must be constructed only from axioms, definitions, or from other theorems rooted in axioms.
Deduction is label-directed, so it takes near-constant time.
Every statement is validated separately, so unfounded theorems will generate separate errors.
Theorems resulting from unfounded theorems can be made to generate a warning with the compiler flag: --warn-unfounded.
