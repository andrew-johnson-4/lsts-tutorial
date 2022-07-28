# Normal Kinds

We have mentioned that types can be marked as normal.
When any Type is marked as normal, the entire Kind that it belongs to is marked as normal.
The kind Term can never be marked as normal.
Attempting to mark a Term Type as normal will result in an error.

Normal kinds are very useful during typecasting.
For most typecasting, the cast must be direct.

```lsts
let a : Real;
let b : Integer = a as Integer;
```

For normal kinds, typecasting will search for a viable path that will satisfy the cast.
Normal typecasting has two phases: the Into-Normal phase, and the Out-Of-Normal phase.

During the Into-Normal phase, the compiler will try to normalize the type.
Multiple casts may be necessary to accomplish this transformation.

```lsts
let mph: Mile / Hour;
let mps: Metre / Second = mph as Meter / Second;
```

In the above example, the compiler must typecast both Miles to Metres and Hours to Seconds.
Note also that the Hours to Seconds cast is on the denominator.
When a Unit cast is on the denominator, the constant conversion factor must be inverted.
A well implemented prelude will take this into account.

During the Out-Of-Normal phase, the compiler will try to take the normalized type and convert it into the annotated type.
This process works mostly identical to the Into-Normal phase, only with a different target.
When Into-Normal and Out-of-Normal phases are connected, multi-step casting can be inferred for fairly complex targets.

```lsts
let mph: Mile / Hour;
let kmpm: Kilo<Metre> / Minute = mph as Kilo<Metre> / Minute;
```
