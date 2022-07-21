# Kinds

Kinds are *types for types*.
Kinds are simple, having a name and potentially some parameters.
Types have exactly one Kind.
Terms can have multiple Types, so they can have multiple Kinds.
Types are attached with a single colon.
Kinds are attached with a double colon.
There are 3 builtin Kinds: Term, Constant, and Nil.

```lsts
5 : Prime :: Term;
2 : Second :: Unit;
1 : [1] :: Constant;
3 : [3] + Integer + Second :: Constant + Term + Unit;
```
