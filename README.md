# Project Battleship
### Entry to TOP's Battleship exercise under the full JS Curriculum

#### Learning Outcomes
1. TDD
2. Testing Basics
3. Unit Testing
4. Red-green cycle



#### 📌 Notes
Three Modes of TDD
1. Obvious implementation. You write the test with the implementation since you know how to implement the method to test.
2. Fake it til you make it. If you know the problem and solutions, but the way you code them up is not immediately obvious to you, then you can use a trick called "fake it 'til you make it."
3. Triangulation . This is the most conservative way of doing TDD. If you don't even know the solution, you just get to green at all costs , red-green, red-green loop.


##### Pure functions
A pure function always return the same results if the same arguments are passed in. It does not depend on any state, data or change of program's execution. It only depends on its input arguments.

A pure function also does not produce any observable side effects such as network requests, input and output devices and data mutation.

An observable side effect is *any* interaction with the outside world from within a function. That could be anything from changing a variable that exists outside a function, to calling another method from within a function. If a pure function calls a pure function it is still considered pure.

*Test driven development encourages better program architecture because it encourages you to write Pure Functions*.

### REFERENCES
[1][Pure Functions](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c)
