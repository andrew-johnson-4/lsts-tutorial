## Compound Values

A compound value is made up of smaller parts.
Some compounds contain heterogenous components.
Some compounds contain homogenous components.
The user can define custom compound values as new types.
Other compound values are implicitly introduced.

### Tuples

A Tuple is an extension of the English concept of "double", "triple", "quadruple", "n-tuple".
Tuples contain a number of heterogenous values.
A Tuple value is introduced using parentheses and comma syntax.
Tuple types are also introduced using parentheses and comma syntax.

```lsts
(1,'a',"bc",True) : (Number, Character, String, Boolean)
```

### Named Tuples

Tuples can be given names and type signatures in a type definition.
Named tuples must declare the type of all of their contained values.

```lsts
type MyStruct = {
   x: Number,
   c: Character,
   s: String,
   b: Boolean
}
```

After a named tuple has been defined, it can be instantiated with similar syntax.

```
MyStruct { x=1, c='a', s="bc", b=True }
```

### Union Types

Union Types define branched types.
A Union value may match with one of, but not multiple of, the Union's branches.
Each branch in a Union is given a tag.
This kind of Union is sometimes called a Tagged Union for that reason.

```lsts
type MyUnion = FirstTag { x:Integer }
             | SecondTag { y:Even }
             | ThirdTag { z:Odd }
             | FourthTag { x:Prime, y:Prime, z:Prime }
```

Union Types are instantiated with the same syntax as for named tuples.

```lsts
SecondTag { y:8 }
```

### Lists

Lists have builtin syntax for their types and for their values.

```lsts
let xs:Integer[3] = [1,2,3];
let vs:Odd[] = [3,5,11,15,17]
```

### Sets

Sets have builtin syntax for their types and for their values.

```lsts
let ss:Set<Integer> = {1, 2, 2, 3}
```

### Maps

Maps have builtin syntax for their types and for their values.

```lsts
let ms:Map<Integer,Prime> = { 1=2, 2=3, 3=5, 4=7 }
```

