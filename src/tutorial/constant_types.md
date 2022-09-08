## Constant Types

Constant Types have their own Kind.
Constants are very important in most programs because they validate the invariant properties of types.
All Constants are either Integer or Boolean values.
There are also some builtin functions for manipulation of Constant values.

Some values are given constant types. This creates a relationship between Term values and Constant types.

```lsts
1: [1];
4: [4];
```

When a Term does a computation, sometimes the Type might also follow along at the type level.

```lsts
1 + 3 : [1 + 3]
```

Type invariants are evaluated in the context of Constant types.

```lsts
let x:Odd;
x % 2 : [1]
```
