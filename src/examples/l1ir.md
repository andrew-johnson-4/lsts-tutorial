## L1 Intermediate Representation

The default backend for interpretation and compilation is L1IR.
It is called L1IR because it is the intermediate representation for L1, which is the default prelude for LSTS.
L1 is a term from linguistics that means your native language, i.e. the first language that you learn.

L1IR can be compiled or interpreted.
Both of these options can be optimized through compilation by using the cranelift code generator.

L1IR is a simple functional programming language.
It only has three datatypes: 
* Literal Strings
* Functions
* Tuples

Using only these three datatypes it is still possible to implement the full feature set of L1.
Initial benchmarks show that compiled L1IR is reasonably fast, within an order of magnitude of Rust with -O3 optimization.
