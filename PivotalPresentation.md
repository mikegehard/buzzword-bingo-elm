# An Introduction to [Elm](http://elm-lang.org/)

1. What is Elm? 

* "the best of functional programming in your browser"
* [senior thesis](http://elm-lang.org/papers/concurrent-frp.pdf) 
from [Evan Czaplicki](https://twitter.com/czaplic) who currently
works at Prezi using Elm.

2. Why Elm?

* High level framework for dealing with complex graphical layouts
* Concurrent [Functional Reactive Programming](https://en.wikipedia.org/wiki/Functional_reactive_programming) 
    * Declartive way to create systems that react to events.
    * Programming focuses on what is displayed, runtime focues on how it is displayed
    * Helps reduce complexity of programming GUIs.
    * Concurrency increases GUI responsiveness
    * [Thesis](http://elm-lang.org/papers/concurrent-frp.pdf) is a great read on the background of Elm.

2. [Elm features](http://elm-lang.org/docs/syntax)

* Repl (elm repl)
* Records - think JavaScript objects but they are immutable and have a type signature

```
type alias Person = { name: String, age: Int}
mike = {name = "Mike", age = 42}
changeAge person newAge = {person | age <- newAge}
changeAge mike 43

```

* Type inference and static typing
* Pure functions
* Syntax is a mix of Haskell and F#
* [Community contributed packages](http://package.elm-lang.org/packages)
* [FRP constructs](http://elm-lang.org/guide/reactivity) 
    * Signal - stream of values that can be manipulated via core logic
    * Task - model for asnyc operations that can fail
    * Signals model incoming data, Tasks model outgoing data. Like monads that they
        put all state mutation outside of pure functions.
    * All are handled by the runtime and not the developer
* [Javascript interop](http://elm-lang.org/guide/interop)

3. Testing via [Elm-test](https://github.com/rtfeldman/node-elm-test)

Haven't gotten around to looking into this yet.

$. [Elm Browser Application Architecture](https://github.com/evancz/elm-architecture-tutorial/)

Very similar to Flux/React in that is has a one way data flow.

Flux

Action(Data) --> Dispatcher --> Store --> View(VirtualDom) --
                       ^                                     |
                       |                                     |
                       |                                     |
                        -------------- Action(Data)----------
                       
Elm

Action(Data) --> StartApp/Global Event Dispatcher --> Update/Model --> View(VirtualDom) --
                       ^                                                     |
                       |                                                     |
                       |                                                     |
                        --------------------- Action(Data)-------------------
                        
                        
5. Code and a [running application](http://buzzword-bingo-elm.cfapps.io/)


