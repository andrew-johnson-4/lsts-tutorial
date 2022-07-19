# Proof of the Infinitude of Prime Numbers

Proposition: There is an infinite number of Prime numbers. Proof:

```lsts
let primes:Prime[];
let p = primes.product() + 1;
forall d:primes. p%d == 1;
```

Suppose that there are a finite number of Prime numbers.
A Prime number is any Integer greater than 1, not evenly divisible by other Prime numbers.

Let p be the product of all Prime numbers plus 1.

No Prime is a factor of p.
Therefore p is a Prime number.
p is not in the list of Prime numbers.

Our supposition that there is a finite number of Prime numbers leads to a contradiction.
Therefore the Prime numbers must be infinite.

Q.E.D.
