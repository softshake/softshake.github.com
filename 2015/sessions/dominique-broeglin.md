---
layout: 2015_session
sessionTitle: 'Dominique Broeglin'
speakerName: 'Matthew Farwell'
speakerEmail: matthew@farwell.co.uk
speakerBio: "Senior software developer, Nexthink SA. (http://nexthink.com)\n\n25 years of development experience, and enthusiastic for Scala\n\nProject lead on Scalastyle, the style checker for Scala. (http://www.scalastyle.org/)\nCo-author of sbt in action. http://www.manning.com/suereth2/ http://www.se-radio.net/2015/07/se-radio-episode-231-joshua-suereth-and-matthew-farwell-on-sbt-and-software-builds/\nContributor to various open source projects, including JUnit, sbt and Scala IDE."
speakerAddress: 'Lausanne, Switzerland'
speakerTitle: 'Dominique Broeglin'
speakerOrganization: 'Nexthink SA'
speakerAvatarUrl: '//www.gravatar.com/avatar/01c4bb8048409cf0238a6518b96d8e05?size=200&default=mm'
sessionCategory: 'Décideur # Decision maker, Architecte # Architect, Développeur # Developer'
sessionLevel: 'Shu (débutant # beginner), Ha (intermédiaire # intermediate), Ri (avancé # advanced)'
sessionTopic: 'Reactive programming'
sessionDescription: "Applications without tests (legacy applications) present particular problems to developers when changes are required. Unless the change is very small, they require a lot of manual testing. This is even more true when we wish to completely replace such an application.\n\nAt Nexthink, we replaced a legacy Ruby on Rails application with a web application written using Spray and Slick. There were two parts, a Rest API, accessed from lots of different version of our products, and an administration web interface to allow editing of the data.\n\nIn replacing this application, we had to ensure that the new implementation returned exactly the same answers to requests as the old application for the same input criteria, without knowing in advance what the requests were.\n\nThis presentation shows how a combination of technologies was used to achieve this goal, including:\n\nspray - for the reactive http container\nproxy - the new application was used as a proxy to the old application, and the results were compared with the new application (in production)\nscalacheck - to generate structured queries on the old and new application, for testing\ngatling - for performance tests\n\nThis presentation covers both how the replacement was done, to ensure the minimum number of bugs in production, along with our subsequent experience in production."
sessionTags:
    - Java
day: '2'
scheduleOrder: 0
---

undefined
