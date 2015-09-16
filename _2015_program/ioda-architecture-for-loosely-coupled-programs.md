---
layout: 2015_session
sessionTitle: 'IODA architecture for loosely-coupled programs'
speakerName: 'Jonas Chapuis'
speakerEmail: jonas.chapuis@nexthink.com
speakerBio: 'Jonas fell in love with computers as a child, and his first video game was his own Snake implementation (which crashed due to pointer misuse). Studying computer science was the obvious choice and he earned his M.Sc. degree from the EPFL in Lausanne, Switzerland, in 2001. He then moved on to Bern where he developed an experimental application for surgery planning which ended up being used at various clinics and from which he earned his Ph.D. degree in 2006. He then joined Nexthink, back then still a "garage" startup and together with a bunch of passionate developers created a product at the forefront of the new era of user-centric enterprise IT. His concern for delivering value to end-users keeps him busy but he knows that good tools and techniques make better products and he his always trying to keep his toolbox well-equipped. He builds reactive applications in C# with Prism/WPF/Rx.'
speakerAddress: 'Oulens, Switzerland'
speakerTitle: 'IODA architecture for loosely-coupled programs'
speakerOrganization: Nexthink
speakerAvatarUrl: '//www.gravatar.com/avatar/d024424ce95ab703818f762ad7d28974?size=200&default=mm'
sessionCategory: 'Architecte # Architect, Développeur # Developer'
sessionLevel: 'Shu (débutant # beginner), Ha (intermédiaire # intermediate), Ri (avancé # advanced)'
sessionTopic: 'IODA architecture for loosely-coupled programs'
sessionDescription: "No matter how hard we try, over time our programs seem to drown in a tangle of dependencies. Services have shifting responsibilities, new responsibilities keep appearing and the dependency graph keeps growing in complexity. Services end up depending on other services which themselves depend on others, growing in an endless dependency chain which is very hard to break. Changing an interface impacts dependent services throughout the codebase and even with good coverage it can be a scary operation. Simple changes such as splitting an interface become daunting with time. Often, common patterns emerge in separate services and hierarchies and we introduce yet another interface, yet another dependency. We rely on advanced injection and mocking frameworks to survive in this growing jungle and still we are struggling. \n\nIODA architecture breaks with the traditional view of dependencies in software. It proposes separating logic, integration and data. In IODA architecture style, data flows between functional units which are mutually oblivious of each other. Integration units assemble functional bricks into modules with progressively higher levels of responsibility. Dependencies between functional modules are expressed in terms of data exchanges and no longer in terms of behavior (services calling others). This approach relies on the best of the functional and object worlds:  higher-order functions raise the level of abstraction of the program's logic, and reactive flows describe data circulating in the system. Classes are used as integration containers for functional units and to define module boundaries.\n\nEven in existing programs and architectures, these techniques can help us from day one in reducing duplication and coupling. Unit testing also becomes easier, with targeted functional tests that resist change. This presentation will show an alternative way of looking at object-oriented programming and illustrate it with concrete code examples in C#."
sessionTags:
    - Microsoft
day: '1'
scheduleOrder: 5
---

undefined
