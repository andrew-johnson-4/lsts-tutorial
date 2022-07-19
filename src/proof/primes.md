#Proof of the Infinitude of Prime Numbers

Proposition: There is an infinite number of Prime numbers. Proof:

```lsts
let primes:Prime[];           //assume there are a finite number of primes
let p = primes.product() + 1; //let p be the product of all primes + 1
forall d:primes. p%d == 1;    //p mod d, forall d in primes list, is 1
```

Suppose that there is a finite number of Prime numbers.
A Prime number is any Integer greater than 1, not evenly divisible by other numbers greater than 1.

Let p be the product of all Prime numbers plus 1.

No Prime is a factor of p.
Therefore p is a Prime number.
p is not in the list of Prime numbers.

Our supposition that there is a finite number of Prime numbers leads to a contradiction.
Therefore the Prime numbers must be infinite.

Q.E.D.
