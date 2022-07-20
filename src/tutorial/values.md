# Value Expressions

Values are existential proofs that a type bound can be satisfied.
The expression "1 is an Integer" proves that integers exist.
We refer to this important relationship as *inhabitance*.
Values inhabit Types. Types inhabit Kinds.
A type with no values is said to be *vacuous*.

### Constant Values

Constant values are assigned to a Type through a combination of inference and regex pattern matching.
A Constant Type will define a regex that matches some value string.
An example of a constant type is the traditional concept of an Integer.
An Integer is denoted as a string of digits: [0-9]+.
 
After creating a value, it can be passed around

```lsts
1 + 2
```

or assigned to a binding

```lsts
let x:Integer = 5
```

### Infix Operators

LSTS recognizes the special syntax of some common infix operators.
The definition of what these operators do is left to the programmer or maybe a prelude.

There are boolean operators

```lsts
a && b || not(c)
```

There are arithmetic operators

```lsts
1^2 + 3 * 4 / 5 - 6 % 7
```

These operations form the basis of logical calculation in LSTS.
