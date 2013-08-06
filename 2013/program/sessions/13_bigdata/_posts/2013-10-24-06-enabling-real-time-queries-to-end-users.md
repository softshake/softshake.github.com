---
layout: 2013_session_fr
title: "Enabling Real-time Queries to End-Users"
author: Benoit Perroud
confirmed: YES
authorpost: benoit-perroud
track: 13_bigdata
web: 
language: en
---

Since it became an Apache Top Level Project in early 2008, Hadoop has established itself as the de-facto industry standard for batch processing. The two layers composing its core, HDFS and MapReduce, are strong building blocks for data processing. Running data analysis and crunching petabytes of data is no longer fiction. But the MapReduce framework does have two major drawbacks: query latency and data freshness.

At the same time, businesses have started to exchange more and more data through REST API, leveraging  HTTP words (GET, POST, PUT, DELETE) and URI (for instance http://company/api/v2/domain/identifier), pushing the need to read data in a random access style  – from simple key/value to complex queries. 

Enhancing the BigData stack with real time search capabilities is the next natural step for the Hadoop ecosystem, because the MapReduce framework was not designed with synchronous processing in mind.

There is a lot of traction today in this area and this talk will try to answer the question of how to fill in this gap with specific open-source components, ultimately building a dedicated platform that will enable real-time queries on Internet-scale data sets. After discussing the evolution of the deployments of common Hadoop platform, a hybrid approach called lambda architecture will be proposed. It will be demonstrated with concrete examples, discussing which technology could be a good match, and how they would interact together.
