## Theorem Statements

Theorems are Logical Arguments that can be proven.
In Strict Mode theorems must be proven by deduction from axioms and definitions.

### Hints

Hints apply theorems to contexts inside of Terms.
Hints attempt to match a Statement definition against the Term and its Type context.
Statement labels can be overloaded to attempt to match multiple patterns in a single Hint.
Successful application of a Hinted Statement will decorate the target Term with new Types.
Failed application of a Hint will generate an Error.

### Time Complexity of Strict Mode

Proof by Deduction of Theorems takes O(n) time, where n is the lexical size of the theorem.
Enabling warnings of all theorems derived from unfounded theorems takes a little extra space and time.

