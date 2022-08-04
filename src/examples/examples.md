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

### Code Playground

<label for="lang">Choose a language to run:</label>
<select name="lang" id="lang">
  <option value="HVM">HVM</option>
</select>
<input type="text" id="args" name="args" value="10">
<button type="button" id="run">Run</button>

```HVM,editable
// Creates a tree with `2^n` elements
(Gen 0) = (Leaf 1)
(Gen n) = (Node (Gen(- n 1)) (Gen(- n 1)))

// Adds all elements of a tree
(Sum (Leaf x))   = x
(Sum (Node a b)) = (+ (Sum a) (Sum b))

// Performs 2^n additions in parallel
(Main n) = (Sum (Gen n))
```
