## Metaprogramming with Types and Kinds

Types and Kinds can be accessed by the programmer for metaprogramming.

```lsts
let unique_type_count() = count(
   for $s in $
   for $e in $s
   yield $$e
);
```

Here we count the number of unique Types in a program.
`$` is the set of all symbols defined in the current namespace.
Each `$s` is a top-level AST node.
Each `$e` is a local-level AST node.
`$$e` is the type of `$e`.
Then the `count` function counts the number of unique types in the list.

```lsts
let unique_kind_count() = count(
   for $s in $
   for $e in $s
   yield $$$e
);
```

Here we count the number of unique Kinds in a program.
`$` is the set of all symbols defined in the current namespace.
Each `$s` is a top-level AST node.
Each `$e` is a local-level AST node.
`$$$e` is the kind of `$e`.
