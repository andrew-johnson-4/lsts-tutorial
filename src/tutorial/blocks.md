## Block Expressions

Blocks group one or more statements together into a logical unit.
The existence of block statements is to some extent an artifact
of the development team's familiarity to programming languages
and unfamiliarity with traditional proof assistants. All
block statements exist to create quantified proofs of properties
in a style familiar to programmers.

### Loops

Loops can prove very interesting properties of language.

A while loop can prove that a condition is terminal, subject to some computation.

```lsts
let more(): Boolean;
while more() {
   //does this ever end?
}
```

For completeness' sake we have also built most traditional control-flow blocks.

```lsts
for x:Prime in primes {
   //this is not unlike a forall statement
}
```

```lsts
loop {
   //this is called a 1+ loop
} while( do_continue() )
```

### If Conditionals

Where would we be without branching conditionals?

```lsts
if a then b
else if c then d
else e
```

We also define pattern matching conditionals which unpack structured data.

```lsts
if let Some(a) = b {
   a: Odd
}
```

### Exhaustive Pattern Matching

For complex value unpacking we have match blocks.

```lsts
match x {
   EnumBranch1(y) => { y: Prime; },
   EnumBranch2(z,w) => { z: Odd; w: Even; },
}
```

### Grouping Blocks

If you just want to group some statements together, for this we have simple brace blocks.

```lsts
{
   let x: Odd;
   a: Integer;
   b: Prime;
   x + a + b: Integer;
}
```








