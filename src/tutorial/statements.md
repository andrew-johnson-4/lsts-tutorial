## Statements

Statements apply logic to connect Terms and Types.
LSTS Statements provide rich algebraic manipulation of Terms and Types.
Statements can be either logical postulates or axioms.

```lsts
axiom @reflexive a:A. [True] = a == a;

forall @reflexive_int a:Integer. [True] = a == a @reflexive;
```
