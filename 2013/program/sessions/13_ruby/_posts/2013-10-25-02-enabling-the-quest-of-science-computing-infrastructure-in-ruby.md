---
layout: 2013_session_fr
title: "Enabling the quest of science: Computing infrastructure in Ruby"
author: Daniel Lobato
authorpost: daniel-lobato
track: 13_ruby
code: s13rb1b
web:
language: en
---

Infrastructure is hot these days. Salaries are still high even though Heroku, Engine Yard, and others have made deployments easy as pie. It is not only that infrastructure these days can be managed with code, using Chef, Puppet and the like, but Ruby can be used for, and is used to power some of the most important super computer centers these days.

We're going to talk about how Ruby is absolutely valid today to build a Computing Center. We're going to talk about this in a very general sense, using great libraries and tools to stand upon the shoulders of giants and be agnostic of whatever our computing distributed system is about. Rackspace, AWS, Openstack, Libvirt.. can all be managed and built using libraries like Fog, Mcollective, Foreman, and others. The great thing about it is that these tools promote domain driven development and you can absolutely disregard a lot of details until you have proven the underlying architecture to be solid.

My idea is to share this with you through the eyes of my experience. I can show you how Ruby is and has been for a while a wonderful tool to think about all of the problems that arise with a bird's eye view. A lot of these tools are being actively developed, and I would love to share my experiences working in these open source tools with teams from all around the world, and how to handle all this.