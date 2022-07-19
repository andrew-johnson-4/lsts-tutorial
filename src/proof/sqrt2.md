# Proof of the Irrationality of the Square Root of Two

Proposition: The square root of 2 is irrational.
Proof:

```lsts
let $"/"(x:X, y:Y): X/Y;
let $"*"(x:X, y:Y): X*Y;
let square(x:X): X*X;

type Pt; let p:Pt;
type Qt; let q:Qt;
let sqrt_of_two: Pt/Qt;
square(sqrt_of_two) * square(q): Pt*Pt; //2 * q*q = p*p
square(p) / square(sqrt_of_two): Qt*Qt; //p*p / 2 = q*q
p / square(sqrt_of_two) : ?/();         //2 is a factor of p
```

We define rational division, multiplication, and square of whole numbers.
Whole numbers are proposed at the type level, rather than at the term level.
Any whole number may be represented as a type T.

Let p be a whole number Pt.
Let q be a whole number Qt.
Suppose the square root of 2 can be represented as a rational number, having numerator Pt and denominator Qt.

By definition the square of the square root of 2 should be equal to 2.
Therefore 2 is equal to (Pt * Pt)/(Qt * Qt).
By the following algebraic manipulation we show that 2 must be a factor of p.
Two is not a rational factor of p.
Therefore the square root of 2 cannot be rational.

Q.E.D.
