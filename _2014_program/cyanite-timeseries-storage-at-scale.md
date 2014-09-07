---
layout: 2014_session
speakerName: 'pierre-yves ritschard'
sessionTitle: 'Cyanite: timeseries storage at scale'
speakerEmail: pyr@spootnik.org
speakerBio: "Pierre-Yves is CTO at exoscale where he is responsible for architecture and strategic technology choices, relying on experience in the architecture of very large corporate system as well as technical product design in several startups.\n\nPierre-Yves is an active member of the open-source community with key contributions to OpenBSD, collectd and riemann amongst others."
speakerAddress: ecublens
speakerTitle: CTO
speakerOrganization: exoscale
speakerAvatarUrl: 'http://www.gravatar.com/avatar/2fcc875f98607b3007909fe4be99160d?size=200&default=mm'
sessionCategory: Présentation
sessionLevel: 'Ha (intermédiaire)'
sessionTopic: Monitoring
sessionTags:
  - Incubateur
scheduleDay: '1'
scheduleOrder: '2'
scheduleRoom: BS30
---

Graphite is the go-to tool of sysadmins everywhere to store and retrieve timeseries data. It fits in a category of tools essential to web developers to gain insight on their application state                                                    
                                                                                
Cyanite is an alternative graphite compatible daemon which uses cassandra as  its main storage engine.  
                                                      
                                                                                
The talk will focus on how to build efficient time-series data models in  cassandra, how the ecosystem of tools around cassandra can help in processing  timeseries in batches and will provide architectural insight in how to build  truly scalable timeseries pipelines.
