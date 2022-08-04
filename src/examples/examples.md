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
  <option value="hvm">HVM</option>
</select>
<label for="args">Arguments:</label>
<input type="text" id="args" name="args" value="10">
<button type="button" id="run">Run</button>
<div id="run_output"></div>

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

<script>
$( document ).ready(function() {
   $( "#run" ).click(function() {
      let lang = $("#lang").val();
      let args = $("#args").val();
      let code = "";
      $(".ace_line").map(function(i,v){ code += $(v).text() + "\n"; });
      let rq = { "source":code };
      const p = args.split(" ");
      for (var pi = 0; pi < p.length; pi++) {
         rq[ "p" + (pi+1) ] = p[pi];
      }
      $.post("https://api.ngrama.com/"+lang, JSON.stringify(rq), function(data, status) {
         let ok = false;
         let res = "";
         if (status != "success") {
            res = data;
         } else if (data.error) {
            res = data.error;
         } else if (data.result) {
            ok = true;
            res = data.result;
         } else {
            res = "Unknown Error";
         };
         $("#run_output").text(res);
         if ok {
            $("#run_output").css({"background-color": "#9be9a8"});
         } else {
            $("#run_output").css({"background-color": "#ffcccc"});
         }
      });
   });
});
</script>
