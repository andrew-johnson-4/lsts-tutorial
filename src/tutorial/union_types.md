# Union Types

Union Types define multiple branches of possible structured data.
Each branch must also be annotated with a tag.
For this reason Union Types are also called Tagged Unions.
Each branch of a Union Type is declared with a tag and its structured data.
Multiple branches are separated with a vertical bar.

```lsts
type Boolean = True | False;
type Option<A> = None | Some { value:A };
```

Union types are instantiated in identical fashion to structured data.
The only difference is that instead of the type name, the tag name is used to prefix the data.

```lsts
Some { value:5 }
```
