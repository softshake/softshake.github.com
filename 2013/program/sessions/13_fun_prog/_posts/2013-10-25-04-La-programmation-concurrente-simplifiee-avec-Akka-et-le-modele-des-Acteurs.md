---
layout: 2013_session_fr
title: La programmation concurrente simplifiée avec Akka et le modèle des Acteurs
author: Christophe PACHE
authorpost: christophe-pache
track: 13_fun_prog
web: 
language: fr
---

Le modèle des Acteurs (Actor model) est une théorie de programmation concurrente. 
Il définit de petites entités, les acteurs, communiquant de manière asynchrone. Cette autre façon de distribuer des processus permet de diminuer grandement la possibilité d'interblocage (deadlock) tout en simplifiant la vie des développeurs.
Akka étant le meilleur exemple de ce modèle sur la JVM (Java et Scala) nous simplifie en grande partie tout ce qui consiste en gestion de thread, sémaphores, moniteurs et verroux.
De plus, Akka est reconnu pour sa résilience, utilisant la pattern "Let it crash".
Cette présentation à pour but de vous rendre familier avec Akka ainsi que de présenter un retour de mon expérience avec ce framework.

