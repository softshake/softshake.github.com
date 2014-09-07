---
layout: 2014_session
sessionTitle: 'I � Unicode'
speakerName: 'Nicolas Seriot'
speakerEmail: nicolas@seriot.ch
speakerBio: "Nicolas participe aux réunions CocoaHeads Lausanne et publie régulièrement son code sur GitHub. Il s’est notamment intéressé aux APIs privées sur iOS, aux données personnelles accessibles par les applications distribués sur l’App Store, au runtime Objective-C, au format Mach-O et à la sécurité de l’API Twitter. Nicolas a présenté son travail dans des conférences telles que BlackHat, NSConference et Hack In The Box et bien sûr SoftShake.\n\nNicolas a d’abord travaillé sur divers projets à Sen:te avant de s’occuper des applications iOS chez Swissquote, où il gère maintenant une équipe de huit développeurs mobile. Il est titulaire d’un diplôme d’ingénieur HES (Yverdon) en informatique logiciel et d’un Master of Advanced Studies en Lutte contre la criminalité économique (Neuchâtel)."
speakerAddress: '1058 Villars-Tiercelin'
speakerTitle: 'Mobile Platforms Manager'
speakerOrganization: Swissquote
speakerAvatarUrl: 'http://www.gravatar.com/avatar/148882c63b0e3a81f07c57476950641f?size=200&default=mm'
sessionCategory: Présentation
sessionLevel: 'Ha (intermédiaire), Ri (avancé)'
sessionTopic: 'Encodages de caractères'
sessionTags:
  - Web
scheduleDay: '2'
scheduleOrder: '3'
scheduleRoom: BS30
---

Quel programmeur ne s'est jamais arraché les cheveux sur un problème d'encodage de caractères ? Cette présentation vous propose de lever le mystère sur une partie de l'informatique omniprésente et pourtant trop souvent mal comprise. Attention, nous n'hésiterons pas à descendre en dessous du niveau de la mer pour plonger dans les octets les plus obscurs.

Dans la première partie, nous évoquerons les origines de l'informatique moderne, la naissance de l'ASCII 7-bits et les différents encodages utilisés jusqu'à l'apparition d'Unicode. Nous discuterons des relations entre texte, caractère, police, symbole, emoji etc. Nous verrons différentes manières d'encoder de l'Unicode et plus particulièrement UTF-8, qui est l'encodage dominant aujourd'hui.

Dans la deuxième partie, nous examinerons de manière pratique comment gérer les caractères Unicode dans différents langages tels que C, Java, Python, JavaScript, Objective-C ou Swift. Nous verrons aussi comment éviter les erreurs d'encodage les plus courantes dans les emails et dans les requêtes HTTP.

Dans la dernière partie, nous nous pencherons sur plusieurs problèmes liés à Unicode : édition et comparaison de texte, normalisation, sécurité, bugs divers et variés. Nous présenterons quelques hacks sympa allant de l'envoi de 279 caractères dans un même tweet au plantage du Finder.
