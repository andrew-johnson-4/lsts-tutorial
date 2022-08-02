# Batteries Not Included

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
For this reason all branches and the return type are parameterized.
The shared parameter will become the greatest-common-denominator of both branches.

```lsts
let $"if"(condition: Boolean, branch1: A, branch2: A): A;
```
