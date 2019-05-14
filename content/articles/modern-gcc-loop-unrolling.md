---
title: "Modern GCC Loop Unrolling"
date: 2019-05-14T12:32:29-04:00
draft: true
type: articles
tags: optimization
---

- describe loop unrolling, and related, "vectorization" (which is how gcc actually handles it)
- SIMD instructions
- pragma GCC push_options, optimize("unroll-loops"), same as _attribute_((optimize("unroll-loops"))) on each function
- https://stackoverflow.com/questions/4071690/tell-gcc-to-specifically-unroll-a-loop/14251545
- https://stackoverflow.com/questions/1422149/what-is-vectorization
- Per-loop unrolling with pragma GCC ivdep - https://gcc.gnu.org/onlinedocs/gcc-4.9.2/gcc/Loop-Specific-Pragmas.html
- Intel compiler-specific unrolling
