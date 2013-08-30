---
layout: 2013_session_fr
title: "Scala joue avec Nao"
author: Nicolas JORAND
authorpost: nicolas-jorand
track: 13_ia_robotics
code: s13ir1d
web: 
language: fr
---

Cette session est une démonstration ainsi qu'une explication du projet nommé Scanao qui permet de contrôler un robot depuis Scala.

Nao est un robot humanoïde développé et construit à Paris par la société Aldebaran Robotics SA. Scanao consiste à utiliser les avantages de Scala afin de simplifier la programmation ainsi que d'utiliser des ressources (CPU, disque, ...) externe au robot pour soulager le CPU interne de celui-ci.

L'architecture est essentiellement orientée autour d'Akka permettant une abstraction de la topologie des ressources ainsi que d'une gestion des accès concurrents simplifiée. Pour orchestrer le tout, scanao possède un DSL permettant le contrôle du robot utilisant son propre langage.
