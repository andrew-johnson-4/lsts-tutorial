## Metaprogramming

LSTS is a thin layer of syntax and logic.
Almost all of this thin layer is also exposed to the programmer to manipulate directly.
The basic data structure of an LSTS program is the Abstract Syntax Tree (AST).
The AST stores a structured representation of the program as defined by its syntactic definition.
At the most general level we can refer to an LSTS program as an AST Graph.
This graph data structure contains all the terms and their relations to one another.

Some other features available to programmers are things like namespaces, types, and kinds.
Each of these data structures can be obtained and referenced through several APIs.
When used in combination some impressive features can be developed quite naturally.
Many of the LSTS [Pearls](https://github.com/andrew-johnson-4/L1Pearls) use metaprogramming.
