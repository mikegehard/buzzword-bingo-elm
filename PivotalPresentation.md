# An Introduction to [Elm](http://elm-lang.org/)

1. What is Elm? 

* "the best of functional programming in your browser"
* [PhD thesis](http://elm-lang.org/papers/concurrent-frp.pdf) 
from [Evan Czaplicki](https://twitter.com/czaplic) who currently
works at Prezi using Elm.

2. [Elm features](http://elm-lang.org/docs/syntax)

* Repl
* Immutability
* Pure functions
* Static Types (looks a lot like Haskell with some F# sprinkled in)
* Type inference

3. Testing via [Elm-test](https://github.com/rtfeldman/node-elm-test)

$. [Elm Browser Application Architecture](https://github.com/evancz/elm-architecture-tutorial/)

Very similar to Flux/React in that is has a one way data flow.

Flux

Action(Data) --> Dispatcher --> Store --> View(VirtualDom) --
                       ^                                     |
                       |                                     |
                       |                                     |
                        -------------- Action(Data)----------
                       
Elm

Action(Data) --> Signal Magic --> Update/Model --> View(VirtualDom) --
                       ^                                              |
                       |                                              |
                       |                                              |
                        -------------- Action(Data)-------------------
                        
                        
5. Code and a [running application](http://buzzword-bingo-elm.cfapps.io/)


