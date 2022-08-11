# Justified Algebraic Manipulation

When algebra is used to manipulate constants, it comes with a cost.
By default, any algebraic manipulation is permitted.
This means that arbitrary jumps towards proof objectives are permitted.
In strict mode, algebraic manipulation must be *justified*.

### Algebra in Strict Mode

By default arbitrary algebra is permitted.

```lsts
[if a%2==0 then 1 else 2]\[a%2|1] : [if 1==0 then 1 else 2] : [2]
```

In strict mode, the algebraic substitution operator *\* is only permitted when the rule applied appears in an attached invariant.

```lsts
(x:Odd) \ [a%2|1]
```

This restriction is necessary to construct sound proof objects.
Without the restriction, it would be easy to jump to arbitrary conclusions.
