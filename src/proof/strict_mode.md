# Strict Proof Verification

It is straight-forwarard to write a mixed proof verifying some aspects of the proof and leaving the rest to plain English for the reader.
For those so inclined, it is also possible to verify the entirety of the proof in LSTS.
The first step for writing a strict proof is to declare the assumptions and the conclusion.

The *Assumptions and Conclusion* method of starting a proof fits conveniently into the form of a function definition.
The arguments to the function become the assumptions.
The return value of the function becomes the conclusion.
Simple, no?

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
3. showing that there exists a concluding result: Conclusion&lt;A,B,C&gt;

See? There really is a strong relation between proofs and programs.
Is this not a convenient relationship between proof objects and simple function declarations?

Just to note, LSTS is not quite as expressive as some other proof assistants.
There is still much work to be done.
However, we feel confident that these missing features can be accomodated for within the LSTS system of reasoning.
