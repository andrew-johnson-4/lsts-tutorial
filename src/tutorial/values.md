## Value Expressions

Values are existential proofs that a type bound can be satisfied.
The expression "1 is an Integer" proves that integers exist.
We refer to this important relationship as *inhabitance*.
Values inhabit Types. Types inhabit Kinds.
A type with no values is said to be *vacuous*.

### Literal Values

Literal values are assigned to a Type through a combination of inference and regex pattern matching.
A Literal Type Definition will define a grammar that matches some value string.
An example of a literal type is the traditional concept of an Integer.
An Integer is denoted as a string of digits: [0-9]+.
 
After creating a value, it can be passed around

```lsts
1 + 2
```

or assigned to a binding

```lsts
let x:Integer = 5
```
