---
layout: 2014_session
speakerName: 'Aurélien Broszniowski'
sessionTitle: 'Write your own performance framework easily!'
speakerEmail: aurbrsz@gmail.com
speakerBio: "Coder since he was a teenager, currently Lead Engineer at Terracotta/Software AG, the company behind Ehcache, Bigmemory and Quartz, Aurelien has worked as a freelancer for many years in the java ecosystem. \nHe has also worked on several open source projects, the latest being Rainfall, a java performance testing framework."
speakerAddress: Paris
speakerTitle: 'Lead Engineer'
speakerOrganization: 'Terracotta/Software AG'
speakerAvatarUrl: 'http://www.gravatar.com/avatar/cf1a4340cff9364091aa52dcf5c9813a?size=200&default=mm'
sessionCategory: Présentation
sessionLevel: 'Ha (intermédiaire), Ri (avancé)'
sessionTopic: 'Performance testing'
sessionTags:
  - Java
scheduleDay: '1'
scheduleOrder: '1'
scheduleRoom: BS30
---

Performance testing is a crucial part of developing an application, however it often happens at a late stage, if at all. Even though there are many testing tools, many have one or more limitations. First they are often specialised in specific areas of performance testing. Second, they use independent components that can not really be integrated in the test and build lifecycle. Finally, performance testing requires specific experience with tackling writing meaningful test scenarios, executing them and building reports.

Rainfall is an extensible opensource java framework that allows developers to easily implement  performance tests.
It has a customisable fluent interface that lets you implement your own DSL when writing tests scenarios, and define your own tests actions and metrics.
Rainfall is open to extensions, two of which are currently in progress, 
- Rainfall web is a Yet Another Web Application performance testing library
- Rainfall JCache is a library to test the performance of caches solutions

This session will cover important principles and problems of performance testing, and will show with practical examples how Rainfall brings solutions to those problems.

