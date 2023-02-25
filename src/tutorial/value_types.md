## Literal Types

Literal Types are defined by a grammar that matches a subset of *value characters*.
LSTS does not really define any builtin literal types.
These literal types are all left to preludes and the user to define.

```lsts
type Number;
type Integer   : Number = /^[0-9][_0-9]*([eE][_0-9]+)?$/;
type Real      : Number = /^[0-9][_.0-9]*([eE][-]?[_0-9]+)?$/;
type Complex   : Number = /^[0-9][_.0-9]*([eE][-]?[_0-9]+)?([+][0-9][_.0-9]*([eE][-]?[_0-9]+)?[i])?$/;
```

As you can see in the above code section, numerical types can be associated with a definitive regular grammar.
There are plans to support Context-Free Grammars and even Free Grammars but this feature is only in discussion.

When the type checker sees a literal value it needs to associate a literal type with it.
Here the first type definition that matches the longest possible literal will be assigned.
In the above example 34 would be assigned to the type Integer.
By contrast 34.0 would become a Real number because it matches a longer string than the Integer.
