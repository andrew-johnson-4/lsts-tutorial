# Jump as a Control Flow primitive

It may suprise some to find out that LSTS has non-functional control flow operators.
Namely, *return* and *raise* both potentially cause stack unwinding to occur.
We can account for this control flow in a functional program by using Monads.
However, it still doesn't *feel* functional.

### Return

Return yields control flow to the end of the function providing a return value.
Even Haskell has a return operator.
In Haskell, the return function is defined as part of Monad and maybe works a little different than a naive programmer would expect.
In LSTS, the return function actually just jumps to the end of the function.
LSTS is not *pure functional* in this sense.

### Raise

The *raise* keyword is even more problematic to explain in a functional perspective.
Raising exceptions can potentially throw control flow back several function calls until it is caught.
An exception is either caught by a *try* block or else it will trace all the way up the call stack to cause a Runtime Error.
Some languages may use Result types to make exceptions more explicit.
In LSTS the type system is powerful enough to infer Results, so we save the programmer some trouble and just let exceptions fly.

### Functional Programming

Some of our backends don't like dirty control flow.
This is OK.
Monadic code will be generated, but it still may not *feel* functional.
This control flow is a lie.
LSTS is still purely functional, though it may not seem so.

```lsts
fn what_error(x: Integer) {
   raise TheError("Where is my type signature...")
}

fn catch_error() {
   match try { what_error(3) } {
      Ok(()) => { print("OK") }
      Error(TheError(msg)) => { print(msg) }
   }
}
```
