## Parameterized Types

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

### Unification of Type Parameters

Unification of Type Parameters is broken into two logical steps: unification and substitution.
Unification checks that two type expressions are compatible and records any substitutions that are required.
Substitution unifies all required substitutions, then replaces them in the type expression.
This distinction holds for both regular type parameters and variables in Constant types.

By example

```lsts
Integer => X = X where X=Integer
X => Integer = {}
```

```lsts
[1] => [x] = [x] where [x|1]
[x] => [1] = {}
```

When a variable appears in multiple places in a type expression, it will be substituted multiple times.
These substitutions must unify with each other under the rules of the Most General Unifier.

By example

```lsts
MGU( Integer, Number ) = Number
MGU( Integer, Boolean ) = {}
```

```lsts
MGU( [1], [self%2==1] ) = [self%2==1]
MGU( [1], [2] ) = {}
```
