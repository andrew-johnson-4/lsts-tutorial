## Value Types

Value types are defined by a regular expression that matches a subset of *value characters*.
Value characters are defined in the LSTS lexer as character ranges associated with values.
In this fashion LSTS does not really define any builtin value types.
All value types are defined by the user or by a prelude that is loaded by the user.

```lsts
type Number;
type Integer   : Number = /^[0-9][_0-9]*([eE][_0-9]+)?$/;
type Real      : Number = /^[0-9][_.0-9]*([eE][-]?[_0-9]+)?$/;
type Complex   : Number = /^[0-9][_.0-9]*([eE][-]?[_0-9]+)?([+][0-9][_.0-9]*([eE][-]?[_0-9]+)?[i])?$/;
```

As you can see in the above code section, numerical types can be associated with a definitive regular expression.
If that regular expression matches with a value, then the type will be associated.
One caveat is that only the first match will associate its type.
Here the number 34 will be assigned only the type Integer because that is the first match.
If you want for 34 to be a Real number then you should write it as 34.0 so that the Integer regular expression fails to match.
