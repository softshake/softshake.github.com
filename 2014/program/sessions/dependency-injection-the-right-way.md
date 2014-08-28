---
layout: 2014_default_en
speakerName: 'Thibaud Desodt'
sessionTitle: 'Dependency Injection, the right way'
speakerEmail: tibo.desodt@gmail.com
speakerBio: "Thibaud is a French .NET developer living in Belgium. He is currently working for the French Government in a Scrum team based in Brussels, where he builds web applications. \n\nHe is slightly obsessed with topics such as TDD, object-oriented design the SOLID way and enjoys deleting dead code nearly as much as writing new one.\n\nWhen at home, he spends most of his time taking care of his daughter, playing or listening to music, or reading the internet ... in no particular order.\n"
speakerAddress: 'Bruxelles, Belgique'
speakerTitle: 'Software Engineer'
speakerOrganization: 'Direction Générale du Trésor'
speakerAvatarUrl: 'http://www.gravatar.com/avatar/fe1107337ed72ea046de03287921eade?size=200'
sessionCategory: Présentation
sessionLevel: 'Ha (intermédiaire), Ri (avancé)'
sessionTopic: 'Dependency Injection, SOLID principles'
sessionTags:
  - Microsoft
scheduleDay: '?'
scheduleOrder: '?'
scheduleRoom: '?'
---

"Program to an interface, not an implementation" they[1] say … 

But when 
    IMyInterface foo = new IMyInterface() 
is not valid code … how are you supposed to achieve that ?
The answer is *Dependency Injection*. 

In this talk, we'll talk about Dependency injection, *what it is* and *what it is not*. 
We'll see how it is a valuable set of practices and patterns that help *design maintainable software* built on top of the *SOLID* object-oriented principles. 

We'll see how, when used properly, it *delivers many benefits* such as extensibility and testability … 
We'll also cover some *anti-patterns*, ways of using Dependency Injection that can lead to code that is painful to understand and maintain


This talk is not about DI/IOC containers per se, but focuses on the *core concepts of Dependency Injection*. Those concepts are essential to understand how to use those "magic-looking" tools (if they are needed at all …)

This talk is not only for .NET developers. It will contain code examples written in C#, but should be understandable by developers with knowledge in other statically-typed object-oriented languages such as Java, Vb.NET, C++ ...

[1] Gang of Four - Design Patterns: Elements of Reusable Object-Oriented Software
