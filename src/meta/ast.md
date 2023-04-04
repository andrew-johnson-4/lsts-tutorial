## Traversing the AST

The basic data structure of metaprogramming is the Abstract Syntax Tree (AST) and its graph.
The AST Graph contains a sparse representation of all Terms and their relations to one another.
Here is an example program that accesses the AST Graph.

```lsts
let ast_edge_count() = sum(
   for $s in $
   for $e in $s
   yield $e.length
);
```

Here `$` is the set of all symbols defined in the current namespace.
Each `$s` is a top-level AST node.
Each `$e` is a local-level AST node.
`$e.length` is the number of outgoing references to other AST nodes.

Keep in mind that the AST Graph may change as the program is analyzed.
The most common change to the AST Graph is for new nodes to be added.

