## LSTS Syntax

LSTS syntax is derived from Lambda Calculus.
Extensions to the Lambda Calculus syntax are modelled after those from previous languages also derived from Lambda Calculus.
Some of these languages include Coq, ML, and Haskell.

### Terms

Terms are all desugared into Lambda Calculus expressions.

```lsts
1;
3.0;
"abc";
2 + 3;
"[" + [for x in range(1,25) yield x^3].join(",") + "]";
```

The iterator syntax and method call are all rewritten as a Lambda Calculus expression.

### Types

Types describe the properties of a Term.

```lsts
type Prime: Integer
   where self > 1
   and   a:Integer. 2>a || a>self-1 || self%a != 0
```

Here we define a Prime number.
Firstly, a Prime number is an Integer.
Secondly, a Prime number is greater than 1.
Thirdly, a Prime number is not evenly divisible by any other number greater than 1.

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
