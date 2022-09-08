## Structured Types

Structured types are also referred to as Named Tuples.
A structured type is a named type with optional parameters.
An example of a structured type would be the concept of a Point in N-dimensional space.

```lsts
struct Point2D<N:Number> = { x:N, y:N };
struct Point3D<N:Number> = { x:N, y:N, z:N };
struct Point4D<N:Number> = { x:N, y:N, z:N, w:N };
```

Type parameters can be inferred when the struct is instantiated.

```lsts
Point3D { x:1, y:2, z:3 }
```

If you want to provide a more explicit parameter bound, then you can annotate the parameters on the constructor.

```lsts
Point2D<Prime> { x:7, y:17 }
```
