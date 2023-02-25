## Batteries Not Included

The title of this example is a pun on the Python motto "batteries included".
LSTS is a type-checker.
LSTS does *nothing* else.

LSTS may connect with a bunch of other software products that include batteries.
However, LSTS by itself is very minimal.
LSTS does not even define "if", although it is given special syntax.

In this example we define "if".
An if statement has three arguments.
One argument for the Boolean branching condition.
Two arguments for each conditional branch.
The if statement returns the value of one of the branches.
All branches and the return type are parameterized.
The shared parameter will become the most-general-unifier of both branches.

```lsts
let $"if"(condition: Boolean, branch1: A, branch2: A): A;
```

The same lack of features applies to the type system as well.
The Boolean type referenced above must be defined by the user.

```lsts
type Boolean = True | False;
```

Numbers are user defined as well.

```lsts
type Number;
type Integer: Number = /^[0-9][_0-9]*([eE][_0-9]+)?$/;
type Real   : Number = /^[0-9][_.0-9]*([eE][-]?[_0-9]+)?$/;
```
