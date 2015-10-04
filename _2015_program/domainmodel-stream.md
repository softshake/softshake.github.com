---
layout: 2015_session
sessionTitle: DomainModel().stream()
speakerName: 'Gilles Di Guglielmo'
speakerEmail: gdigugli@gmail.com
speakerBio: 'Gilles is a 15+ software developer working for various software vendors (ILOG, PrimaSolution, Courtanet) : graphic 2D librairy, rules engine, J2EE service platform, domain model code generation. He is currently software architect for the insurance comparison web site LesFurets.com. He loves to feel the fresh air of San Francisco and Anvers.'
speakerAddress: Paris
speakerTitle: DomainModel().stream()
speakerOrganization: LesFurets.com
speakerAvatarUrl: '//www.gravatar.com/avatar/10812203f3d64bcfad23fb55b8618f17?size=200&default=mm'
sessionCategory: 'Architecte # Architect, Développeur # Developer, Data scientist'
sessionLevel: 'Ha (intermédiaire # intermediate)'
sessionTopic: 'stream, map, reduce, domain model'
sessionDescription: "The perfect representation for data manipulation is based on collections, lists or maps but most applications are designed based on an object domain model. We solved this issue by implementing a KVM (Key Value Mapping) at the core level of our application.\n\nData manipulation became very easy after implementing the bi-directional mapping of our entities to a key/value model. It took significant time before being able to leverage this new ecosystem and it started with a wide refactoring of the entities in order to fix our model key space.\n\nThe main issues we faced were:\n•avoiding instance sharing (pointer equality is no longer available)\n•fixing the maximum size of the unbound relations\n•identifying the path from the root entities holder to every value\n\nWe will explain:\n•the patterns to avoid\n•the mandatory refactorings\n•how we generated a key/value proxy API on top of our domain model (based on annotation processing and metadata).\n\nWe implemented a wide set of new features on multiple tiers of our application and leveraged the power of stream API and RxJava. Here are a few examples:\n•mapping idempotence (consistency between Object entities and Key-Value model)\n•persistence in a column-based data store\n•diff between two instances of a domain model\n•incremental storage using CQRS, diff and Copy-On-Write approach of the model\n•optimized serialization using JSON dictionaries\n•easy mocking for testing\n•simplified MVC pattern for JS single page application\n•classifying datasets using Spark and MLLib directly on top of the domain model\n\nThe session will be illustrated with code samples from our code base and our KVM framework available on github."
sessionTags:
    - Java
secondSpeakerName: 'Julien Baudry'
secondSpeakerEmail: jul.baudry@gmail.com
secondSpeakerBio: 'Julien is a 7+ software developer working for software vendors (PrimaSolution, LesFurets.com). He is currently software architect for the insurance comparison web site LesFurets.com.'
secondSpeakerTitle: Architect
secondSpeakerOrganization: LesFurets.com
secondSpeakerAvatarUrl: '//www.gravatar.com/avatar/8e131a345518c1b383e2815edd2714d7?size=200&default=mm'
scheduleDay: 0
scheduleOrder: 4
scheduleRoom: 4
---

undefined
