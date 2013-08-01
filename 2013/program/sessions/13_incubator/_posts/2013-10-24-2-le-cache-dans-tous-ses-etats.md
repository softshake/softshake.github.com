---
layout: 2013_session_fr
title: Le cache dans tous ses états
author: Mathilde Lemee
authorpost: mathilde-lemee
track: 13_incubator
web: 
language: fr
---

Comment diminuer le temps de traitement d'un batch ? Le temps d'exécution dune requête ? Le cache est un des outils du développeur pour résoudre ses problématiques quotidiennes et les concepts qui gravitent autour sont nombreux. Si les mots Cache Aside, Write-Behind, Read-Through ne vous sont pas familiers, cela fait pourtant parti des architectures qu’il est facile à mettre en place et qui dans certains contextes peuvent diminuer de manière drastique la durée d’un batch ou d’une requête.
Nous aborderons également les différents moyens de scaler horizontalement et verticalement le cache (réplication, miroir, partitionnement) en nous appuyant sur différentes librairies existants (GemFire, Coherence, Terracotta, Ehcache, Infinispan, Hazelcast) mais également NoSQL et plus généralement les In Memory Data Grid (IMDG)...