# Finding Right Triangles

Haskell has great list comprehensions.
Iterators in LSTS are not that bad either.
One great example of list comprehensions comes from a popular [Haskell Tutorial](http://learnyouahaskell.com/starting-out#texas-ranges).
In this example, Haskell is used to find all right triangles with a perimeter of length 24.

Here is the Haskell code.

```haskell
[ (a,b,c) | c <- [1..10], b <- [1..c], a <- [1..b], a^2 + b^2 == c^2, a+b+c == 24]
```

Here is the LSTS code.

```lsts
[ for c in range(1,10) 
  for b in range(1,c)
  for a in range(1,b)
  if a^2 + b^2 == c^2 && a+b+c == 24
  yield (a,b,c) ]
```

LSTS takes more characters to write the same program.
However, I think seeing LSTS for the first time would be easier to read.
This is how list comprehensions compare for these two languages.

The output for both programs should be [(6,8,10)].
