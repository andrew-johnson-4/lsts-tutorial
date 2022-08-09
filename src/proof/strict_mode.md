# Strict Proof Verification

It is straight-forward to write a mixed proof verifying some aspects of the proof and leaving the rest to plain English for the reader.
For those so inclined, it is also possible to verify the entirety of the proof in LSTS.
The first step for writing a strict proof is to declare the assumptions and the conclusion.

The *Assumptions and Conclusion* method of starting a proof fits conveniently into the form of a function definition.
The arguments to the function become the assumptions.
The return value of the function becomes the conclusion.

```lsts
let some_proof <A:Integer,B:Odd,C:Prime> (
   assumption1: Property1<A,B>,
   assumption2: Property2<C> ):
   Conclusion<A,B,C> = {
   //Here we will derive the conclusion
   //starting from the assumptions
}
```

This code snippet can be read as

1. for all quantified variables in the assumptions: A, B, C
2. assume the given properties: Property1&lt;A,B&gt;, Property2&lt;C&gt;
3. show that there exists a concluding result: Conclusion&lt;A,B,C&gt;

There is a strong relation between proofs and programs.
This is a very direct relationship between proof objects and simple function declarations.

### Proof Objects

In strict mode, LSTS will also produce a *proof object*.
A proof object is a program that, when run, will attempt to reduce all logical statements made in the LSTS program.
The proof object runs on a much simpler kernel of logical statements, so it may help expose some flaws that occur in higher-level logic.
When run, the proof object will produce True, False, or diverge.
Currently, for proof objects, we are targeting languages that closely resemble Lambda Calculus to make the translation easier.

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
         if (ok) {
            $("#run_output").css({"background-color": "#9be9a8"});
         } else {
            $("#run_output").css({"background-color": "#ffcccc"});
         }
      });
   });
});
</script>
