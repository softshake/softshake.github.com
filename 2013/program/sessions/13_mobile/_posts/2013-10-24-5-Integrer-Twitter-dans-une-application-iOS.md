---
layout: 2013_session_fr
title: Intégrer Twitter dans une application iOS
author: Nicolas SERIOT
authorpost: nicolas-seriot
track: 13_mobile
code: s13mo1e
web: 
language: fr
---

Cette présentation explique le fonctionnement et les subtilités de l'API Twitter ainsi que les différentes manières d'y accéder depuis une application iOS.

Dans le cas le plus simple, le développeur iOS peut facilement utiliser les comptes indiqués dans les réglages de l'appareil pour envoyer un tweet. Il peut également, même si c'est plus compliqué, accéder à l'API complète pour, par exemple, suivre un compte ou récupérer une timeline.

S'il aucun compte Twitter n'est paramétré dans l'appareil, le développeur peut demander des identifiants à l'utilisateur pour créer lui-même des requêtes. Le développeur doit alors gérer l'authentification avec le protocole OAuth et ses différentes variantes telles que xAuth.

Dans le cas où l'utilisateur n'a pas de compte Twitter, une application peut tout de même accéder à un sous-ensemble de l'API Twitter, pour peu qu'elle s'authentifie avec le protocole dit "App Only".

Vous découvrirez la librairie STTwitter, capable de gérer les différents modes d'authentification et qui fournit des méthodes Objective-C pour chaque point de l'API Twitter.