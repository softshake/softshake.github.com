---
layout: 2014_session
sessionTitle: 'Get Back in Control of Your SQL with jOOQ'
speakerName: 'Lukas Eder'
speakerEmail: lukas.eder@datageekery.com
speakerBio: "I am the founder and CEO of Data Geekery GmbH, located in Zurich, Switzerland. Data Geekery has been selling database products and services around Java and SQL since 2013.\n\nEver since my Master's studies at EPFL in 2006, I have been fascinated by the interaction of Java and SQL. Most of this experience I have obtained in the Swiss E-Banking field through various variants (JDBC, Hibernate, mostly with Oracle). I am happy to share this knowledge at various conferences, JUGs, in-house presentations and on my blog."
speakerAddress: 'Zürich, Switzerland'
speakerTitle: CEO
speakerOrganization: 'Data Geekery GmbH'
speakerAvatarUrl: 'http://www.gravatar.com/avatar/1155be1ed8e9c17511be9479582238e1?size=200&default=mm'
sessionCategory: Présentation
sessionLevel: 'Ha (intermédiaire)'
sessionTopic: 'The Java and SQL Interface - beyond JDBC and JPA'
sessionTags:
  - Java
scheduleDay: '1'
scheduleOrder: '3'
scheduleRoom: A105
---

SQL is a powerful and highly expressive language for queries against relational databases. SQL is established, standardised and hardly challenged by alternative querying languages. Nonetheless, in the Java ecosystem, there had been few relevant steps forward since JDBC to better integrate SQL into Java. All attention was given to object-relational mapping and language abstractions on a higher level, such as OQL, HQL, JPQL, CriteriaQuery. In the meantime, these abstractions have become almost as complex as SQL itself, regardless of the headaches they’re giving to DBAs who can no longer patch the generated SQL.

jOOQ is a dual-licensed Open Source product filling this gap. It implements SQL itself as an internal domain-specific language in Java, allowing for the typesafe construction and execution of SQL statements of arbitrary complexity. This includes nested selects, derived tables, joins, semi-joins, anti-joins, self-joins, aliasing, as well as many vendor-specific extensions such as stored procedures, arrays, user-defined types, recursive SQL, grouping sets, pivot tables, window functions and many other OLAP features. jOOQ also includes a source code generator allowing you to compile queries in modern IDEs such as Eclipse very efficiently.

jOOQ is a good choice in a Java application where SQL and the specific relational database are important. It is an alternative when JPA / Hibernate abstract too much, JDBC too little. It shows, how a modern domain-specific language can greatly increase developer productivity, internalising SQL into Java.
