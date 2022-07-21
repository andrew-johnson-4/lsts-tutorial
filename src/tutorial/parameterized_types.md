# Parameterized Types

Type parameters create generic types.
A Generic Type is a single type definition that can have multiple type signatures.
Each type signature will have a similar, but not quite exactly the same, structure.
Parameters can be added to any type definition to create a generic type.

```lsts
type Point2D<N:Integer> = { x:N, y:N };

type Result<OK,ERR> = Ok { ok: OK }
                    | Err { err: ERR };
```

Type parameters can also be added to any parameterized type in its constructor.
This creates a very strict enforcement of the type's parameter bounds.

```lsts
Ok<Odd,String> { ok: 1 }
```
