## Fallible Arrows

Arrow Terms, also called Lambdas, or Functions, are a central concept of functional programming.
In LSTS most functions are defined as let bindings.
When a function is defined as a let binding, its binding is considered total over its type.
A total function means that, given any term satisfying the function's domain type, a value will be returned that satisfies the function's range type.

By contrast, some arrows are fallible.
A match expression uses many possible arrows to return values from each case of the pattern.
These arrows do not match all values of their types, so they are not total.
Functions that are not total are also called *fallible*.
If-let expressions also use fallible arrows.

```lsts
//f is infallible and total
let f(x: Integer) = x*x;

//match arms are fallible
//considered as a whole, this match is total
let m = match t {
   Some(x) => { f(x) },
   None => { f(1) },
};

//if-let arms are fallible
//this expression is not total unless you consider the implicit else expression
if let Some(x) = t {
   f(x)
};
```

Let bindings can also be marked fallible.
An example of a fallible function is division.
Any number divided by zero is undefined.
There is no result, the result is just undefined.
Below we define this type signature for LSTS.

```lsts
let $"/"(n: Number, d: Number): Number
    where fails if d == 0;
```
