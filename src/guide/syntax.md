# LSTS Syntax

LSTS syntax is derived from Lambda Calculus.
Extensions to the Lambda Calculus syntax are modelled after those from previous languages also derived from Lambda Calculus.
Some of these languages include Coq, ML, and Haskell.

# Define a type

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

# Bind a value

Let bindings attach properties to Terms.

```lsts
let x:Prime = 3;
let y:Prime = 4;
```

In the first binding of *x*, the number 3 satisfies the bounds and is accepted as an inhabitant of its Type.
In the second binding of *y*, the number 4 does not satisfy the primality test defined by Prime and will be rejected.
A rejected program will typically result in an error and message if lsts is invoked from the command line.

Let bindings do not need to be inhabited.
The value can be omitted, at which point the binding becomes a supposition.
This format is very useful for constructing quantified proofs or proofs by contradiction.

```lsts
forall x:Odd. x%2 == 1
```

# Kind a type

Kinds are *types for types*.
Kinds are simple, only allowing Named kinds and possibly parameters.
The three built-in kinds are Term, Constant, and Nil.
New kinds do not need to be defined before they are used.
Kinds are introduced with double-colon syntax, similar to the single-colon syntax used for types.

```lsts
1 : Second :: Unit
```

Here we say that Second is a Unit type rather than a Term type.
