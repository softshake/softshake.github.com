---
layout: 2014_session
sessionTitle: 'Refactorer legacy, même pas peur!'
speakerName: 'johan martinsson'
speakerEmail: martinsson.johan@gmail.com
speakerBio: "Johan Martinsson is a freelance developer that is passionate, amongst other things, about design in code. He has spent the last 4 years helping teams adopt XP-practices in his hometown – Grenoble, France. Johan regularly finds reasons to show code to make his point at conferences. Johan organized the first code retreat in France, organized the first Legacy Code Retreat with JB Rainsberger.\nFor the last three years he also co-organized the Grenoble coding dojo and one of France’s biggest agile events: Agile Grenoble."
speakerAddress: 'GRENOBLE, FRANCE'
speakerTitle: Developer
speakerOrganization: ChangIT
speakerAvatarUrl: 'http://www.gravatar.com/avatar/3771a70b46d12cb049e7be561ae69116?size=200&default=mm'
sessionCategory: Présentation
sessionLevel: 'Shu (débutant), Ha (intermédiaire), Ri (avancé)'
sessionTopic: 'Tests pour refactoring'
sessionTags:
  - Agile
secondSpeakerName: 'Rémy Sanlaville'
secondSpeakerEmail: remy.sanlaville@gmail.com
secondSpeakerBio: "After completing a PhD in Software Engineering, Rémy Sanlaville joined Orange. He has spent the last six years helping Orange teams to improve their skills and practices in software engineering and agile methods.\nSince 2008, he regularly speaks at software and agile conferences in France. He is an organizer of the Grenoble Coding Dojo (since the beginning in 2009). He also co-organized the first Code Retreat in France (Grenoble, 2011), the first Legacy Code Retreat with J.B. Rainsberger (Grenoble, 2011) and the first BDD workshop in France (Grenoble, 2012).\nHis key passion is to break down the complexity around coding and software projects by providing simple and practical solutions."
secondSpeakerTitle: ""
secondSpeakerOrganization: Orange
secondSpeakerAvatarUrl: 'http://www.gravatar.com/avatar/4f5f6316a600aff6ff28c847575ac47f?size=200&default=mm'
scheduleDay: '1'
scheduleOrder: '6'
scheduleRoom: A106
---

Le code legacy est souvent synonyme de difficilement lisible et évolutif. Refactorer le code reste trop dangereux sans disposer de tests. Néanmoins, les écrire préalablement est souvent perçu comme TRÈS long et n’est donc pas fait. Est-ce possible à la fois d’écrire très rapidement des tests qui ont une couverture de code proche de 100% et qui ne sont pas fragiles au remaniement du code et du design ? OUI, en utilisant l'approche Golden Master.

L’idée est d’écrire des tests temporaires spécifiques à l’activité de refactoring qui bombardent la partie du code à remanier en faisant varier les arguments en entrée et compare la sortie avec une référence qui a été enregistré avec le code initial. Le tour de force est d’automatiser tout cela grâce un outillage adapté comme Approvals Test. Après le refactoring, ces tests temporaires seront facilement remplacés par des tests traditionnelles, maintenables.

A travers un démo live, nous montrons comment cette méthode rend un exemple, de prime abord complexe*, simple à tester. 

Par complexe nous entendons ce-coup-ci xml important en entrée, webservices tiers, effets de bord sur disque

