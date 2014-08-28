---
layout: 2014_default_en
speakerName: 'Duncan Mole'
sessionTitle: 'The obviousness and power of Rx'
speakerEmail: duncanmole@gmail.com
speakerBio: 'Long experience in high finance, creating low-latency, compute intensive solutions. Rx fanboy and long time user (since before the public beta when it was leaked with the Silverlight Control test suite), Credited on http://www.introtorx.com/ and Reactive Manifesto subscriber.'
speakerAddress: Geneve
speakerTitle: 'Senior Developer'
speakerOrganization: Cargill
speakerAvatarUrl: 'http://www.gravatar.com/avatar/b75739306b32d00bd323641c92daa820?size=200'
sessionCategory: Présentation
sessionLevel: 'Shu (débutant), Ha (intermédiaire), Ri (avancé)'
sessionTopic: 'The duality with IEnumerable'
sessionTags:
  - Microsoft
scheduleDay: '?'
scheduleOrder: '?'
scheduleRoom: '?'
---

This talk is given in C# but there are Rx ports to a great many languages including Java. A few points may reference C#'s compiler tricks. We will also touch on stream processing which is kind of a Big Data theme. Not too sure that this talk belongs too a single track.

The majority of the talk will be live coding.

We will start by revisiting the IEnumerable interface in order to discover  its true nature, redefining it in functional terms. We will flesh out the discoveries in code (IEnumerablle2). We will define C#'s standard query operators, provide a generic factory method and consuming method (foreach). We may touch on some of the work the compiler is doing for us at a language level to support foreach loops and yield return. Also we may mention how the standard query operators relate to C#'s monad support.

Once we have this IEnumerable2 definition we will mechanically invert it to derive it's dual.... IObservable2. We will convert the Standard Query operators, generic factory method and consuming method.

We will use IObservable2 interface to do some work asynchonously.  We will then use the generic factory to define some operators, or *combinators* and demo their use, perhaps something like controlling concurrency of some really useful compute based work like calculating primes.

If we have time we will run some more stream processing demo's like calculating a streaming moving average..
