---
layout: 2014_default_en
speakerName: 'Emmanuel Hugonnet'
sessionTitle: 'You’re pretty fly for a WildFly '
speakerEmail: ehugonne@redhat.com
speakerBio: ""
speakerAddress: 'Barraux, France'
speakerTitle: Développeur
speakerOrganization: 'Red Hat'
speakerAvatarUrl: 'http://www.gravatar.com/avatar/a15b9135c214b138712332193bbfd5bb?size=200'
sessionCategory: Présentation
sessionLevel: 'Shu (débutant), Ha (intermédiaire)'
sessionTopic: 'Java JEE7'
sessionTags:
  - Java
scheduleDay: '?'
scheduleOrder: '?'
scheduleRoom: '?'
---

WildFly 8 (anciennement JBoss Application Server) est le serveur d'application JEE7 open source de Red Hat. Il se compose d'implémentatiosn solides des différentes spécifications JEE7 parmi lesquelles on notera WebSocket, Batch, JSON, Concurrency, JMS2, JAX-RS 2, CDI 1.1.
Undertow est le nouveau serveur web intégré à WildFly 8, il est conçu pour un débit et un passage à l'échelle maximaux dans des environnements pouvant aller jusqu’à un million de connexions. L'utilisation de protocols multiplexés sur HTTP (grâce à HTTP Upgrade) a permis de réduire le nombre de ports ouverts.
Pour les organisations qui désirent gérer les différentes responsabilités avec des restrictions nous avons ajouté la fonctionnalité Role Based Access Control. Les rôles représentent différents ensembles de permissions comme l'exécution d'opération de type runtime, l'accès en lecture ou en écriture à différents points de configuration, la possibilité d'auditer les modifications ou la gestion des utilisateurs. De plus, un nouveau journal d'audit avec des restrictions d'accès peut être mis en place avec la possibilité d'enviyer les traces vers un serveur syslog sécurisé.
 
WildFly fournit aussi une distribution "core" idéale pour les auteurs de framework qui veulent créer leur propre environnement d'exécution en réutilisant l'architecture de WildFly 8.
 
NetBeans, IntelliJ et Eclipse permettent à WildFly d'être utilisé pour le développement, le déploiement et le débuggage.
