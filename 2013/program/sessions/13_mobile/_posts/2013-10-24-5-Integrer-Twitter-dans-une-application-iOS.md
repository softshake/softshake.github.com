---
layout: 2013_session_fr
title: Intégrer Twitter dans une application iOS
author: Nicolas SERIOT
authorpost: nicolas-seriot
track: 13_mobile
code: s13mo1e
web: 
language: fr
schedule : jeudi 24 octobre 2013, 14:30 - 15:15
resource: http://seriot.ch/resources/abusing_twitter_api/ios_twitter_integration_sos13.pdf
---

Cette présentation explique le fonctionnement et les subtilités de l’API Twitter ainsi que les différentes manières d’y accéder depuis une application iOS.

Dans le cas le plus simple, le développeur iOS peut utiliser les comptes indiqués dans les réglages de l’appareil pour envoyer un tweet. Il peut également, même si c’est plus compliqué, accéder à l’API complète pour, par exemple, suivre un compte ou récupérer une timeline.

Si aucun compte Twitter n’est paramétré dans l’appareil, le développeur peut demander à l'utilisateur ses identifiants puis créer lui-même des requêtes. Le développeur doit alors gérer l’authentification avec le protocole OAuth et ses différentes variantes telles que xAuth.

Le développeur peut aussi proposer à l'utilisateur de s'authentifier dans Safari puis récupérer les jetons d'accès de l'utilisateur.

Le développeur peut encore demander à l'utilisateur d'autoriser une application Twitter tierce à utiliser le compte qu'il a configuré dans l'appareil (reverse auth.). Pratique par exemple pour authentifier l'utilisateur auprès d'un service tiers ou pour pouvoir accéder à ses "direct messages".

Dans le cas où l’utilisateur n’a pas de compte Twitter, une application peut tout de même accéder à un sous-ensemble de l’API Twitter, pour peu qu’elle s’authentifie avec le protocole dit “App Only”.

J'expliquerai simplement ces différents cas d'utilisation et montrerai pour chacun une implémentation en Objective-C. Vous découvrirez la librairie STTwitter, capable de gérer les différents modes d’authentification et qui fournit des méthodes Objective-C pour chaque point de l’API Twitter.

Si le temps le permet, je dirai quelques mots sur la sécurité de ce système.
