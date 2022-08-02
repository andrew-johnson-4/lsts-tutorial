# Example Programs

LSTS is also a programming language so you can use it to calculate and discover answers to questions.
More than just existential proofs, programs can be used to compute.
That is why we call it Computer Science.

LSTS takes inspiration from both Haskell and ML for its syntax and semantics.
This might surprise some to say that LSTS is like both of these languages.
The reason for the surprise is that Haskell is lazily evaluated, whereas ML is eager.
You can't have both... can you?

LSTS leaves as much as possible up to the programmer.
For example, LSTS is derived from Typed Lambda Calculus, but it derives no types.
Similarly, LSTS has no builtin evaluation strategy.
When choosing a backend that implements an evaluation strategy, then the programmer must choose between lazy or eager, but not until then.
LSTS just type-checks things, and *nothing* else.

Here are some backends that LSTS can target:

- [HVM](https://github.com/Kindelia/HVM)
   - lazy
   - massively parallel
   - compiled or interpreted
   - compilation outputs platform binary or WASM
