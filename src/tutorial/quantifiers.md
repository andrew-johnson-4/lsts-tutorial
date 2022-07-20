# Quantified Values

Quantified Values inhabit Quantified Types.
This concept maps exactly to the programming concept of iterators,
so we will just steal that syntax and use it here.

### Iterators

A naked iterator looks much like a for loop.

```lsts
for i:Integer in ls yield i+1
```

### Containers

Iterators can fill containers,

like sets

```lsts
{for a:Integer in s yield a*a}
```

or lists

```lsts
[for a:Integer in s yield a*a]
```

or maps.

```lsts
{for a:Integer in s yield a:a*a}
```
