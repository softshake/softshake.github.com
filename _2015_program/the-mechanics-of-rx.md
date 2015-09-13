---
layout: 2014_session
sessionTitle: 'Mechanics and Application of Rx'
speakerName: 'Duncan Mole'
speakerEmail: duncanmole@gmail.com
speakerBio: 'Long experience in high finance, creating low-latency, compute intensive solutions. Rx fanboy and long time user (since before the public beta when it was leaked with the Silverlight Control test suite), Credited on http://www.introtorx.com/ and Reactive Manifesto subscriber.'
speakerAddress: Geneve
speakerTitle: 'Senior Developer'
speakerOrganization: Cargill
speakerAvatarUrl: 'http://www.gravatar.com/avatar/b75739306b32d00bd323641c92daa820?size=200&default=mm'
sessionCategory: Présentation
sessionLevel: 'Shu (débutant), Ha (intermédiaire), Ri (avancé)'
sessionTopic: 'The duality with IEnumerable'
sessionTags:
  - Microsoft
scheduleDay: '1'
scheduleOrder: '6'
scheduleRoom: A102
sessionLinks:
  - title: 'Script and supporting code (GitHub)'
    url: https://github.com/dunkymole/MechanicsOfRx
  - title: "Conference AI demo code"
    url: https://gist.github.com/dunkymole/c6c0726b97cab51669c4
---

This talk is given in C# but there are Rx ports to a great many languages including Java. A few points may reference C#’s compiler tricks. We will also touch on stream processing which is kind of a Big Data theme.

This talk will be CODE BASED, no slides! Bring your brains.

We will start by revisiting the IEnumerable interface in order to discover its true nature, redefining it in functional terms. We will flesh out the discoveries in code (IEnumerable2). We will define C#’s Standard Query operators and consuming method (ForEach). We will mention the work the compiler is doing for us to support the Query Comprehension feature.

Once we have this IEnumerable2 definition we will mechanically invert it to derive it’s dual…. IObservable2. We will convert the Standard Query operators, generic factory method and consuming method.

After showing how Rx can be derived in this way we will move over to the offical Rx libraries to demonstrate stream processing with audience participation by building a Cortana inspired conference AI system! Vive la Rx!
