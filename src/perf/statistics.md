## Benchmark Statistics

Here we benchmark the compiler on different stress tests.

| benchmark        | time                          |
| ---------------- | ----------------------------- |
| big file 10k loc | 22.937 ms                     | 

Here we benchmark the default evaluation strategy (L1) on different stress tests.

| benchmark        | language | time                          |
| ---------------- | -------- | ----------------------------- |
| 1M 2^20          | Rust     | 4.8860006                     |
| 1M 2^20          | L1       | 3.8207040                     |
| 1M 2^20          | Ocaml    | 2.5900000                     |

note: Rust is compiled without optimizations enabled because it constant folds the entire benchmark
