# Implication Unifier

The Implication Unifier of two type expressions is a directed intersection of their statements.
Implication is similar to Most General Unifier with the added constraint that information can only flow from left to right.

### Implication by example

A type expression, implied with itself, will always yield itself, and its full self.

```lsts
? => ? = ?
A => A = A
Aa => Aa = Aa
Aa + Bb => AA + Bb = AA + Bb
Aa -> Bb => Aa -> Bb = Aa -> Bb
(Aa,Bb) => (Aa,Bb) = (Aa,Bb)
Aa*Bb => Aa*Bb = Aa*Bb
Aa/Bb => Aa/Bb = Aa/Bb
[1] => [1] = [1]
```

The left-hand-side can narrow to unify. The right-hand-side cannot narrow.

```lsts
Aa + Bb => Aa = Aa
Aa + Bb => Bb = Bb
Aa + Bb + Cc => Aa + Bb = Aa + Bb
Aa => Aa + Bb = {}
Bb => Aa + Bb = {}
Aa + Bb => Aa + Bb + Cc = {}
```

Components of compound types can narrow also.

```lsts
{Aa + Bb} -> Aa => Aa -> Aa = {}
Aa -> {Aa + Bb} => Aa -> Aa = Aa -> Aa
Aa -> Aa => {Aa + Bb} -> Aa = Aa -> Aa
Aa -> Aa => Aa -> {Aa + Bb} = {}
({Aa + Bb},Aa) => (Aa,Aa) => (Aa,Aa)
(Aa,Aa) => ({Aa + Bb},Aa) => {}
{Aa+Bb)*Aa => Aa*Aa => Aa*Aa
Aa*Aa => {Aa+Bb}*Aa => {}
{Aa+Bb)/Aa => Aa/Aa => Aa*Aa
Aa/Aa => {Aa+Bb}/Aa => {}
```

There are several special cases.

```lsts
A/() => A = A
A => A/() = A
```

Any failure to unify in a compound type yields the bottom type.

```lsts
Aa -> Aa => Aa -> Bb = {}
(Aa,Bb) => (Aa,Cc) = {}
Aa*Bb => Aa*Cc = {}
Aa/Bb => Aa/Cc = {}
```
