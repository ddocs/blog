---
title: The usability canary in the security coal mine - A cognitive framework for evaluation and design of usable authentication solutions
order: 2
---
<details>
  <summary>Citation</summary>
The usability canary in the security coal mine:
A cognitive framework for evaluation and design of usable authentication solutions
Brian Glass∗
, Graeme Jenkinson†
, Yuqi Liu∗
, M. Angela Sasse∗
, and Frank Stajano†
∗University College London
†University of Cambridge
</details>

This paper focuses on usability problems with authentication. It presents a framework that allows security designers to model an authentication method workload in the context of the users primary task. It proposes a design and evaluation framework for a designer to understand the impact on usability of a security choice.

## Introduction:

The importance of usable security mechanisms that don't frustrate users is a recurring theme across sectors. It isn't easy to evaluate a usable security mechanism during the discovery phase. The usability canary in the security coal mine proposes a cognitive framework that prioritises understanding the impact of task load on subsequent tasks.

## The Framework
The framework draws on theories from cognitive psychology to assess amongst other points,the cost of task switching. It outlines a way to model the tasks of the intended scenario along with their constraints to describe their relationships. It then uses this data to quantitatively suggest combinations that minimise the cognitive load and usability cost to the user. 

### Task switching
When someone switches from one task to another, the brain needs to reorganise and reallocate cognitive resources to ensure an efficient transition. This results in performance deficits or switch costs as you enter a kind of gear change in your mind before appropriate task-specific processes can proceed.

This can include shifting attention between the stimulus attributes or elements, or between conceptual criteria, retrieving goal states (what to do) and condition–
action rules (how to do it) into procedural working memory (or deleting them), enabling a different response set and adjusting response criteria.
These switch costs occur depending on the tasks involved. (switch cost asymmetries).

### Cognitive Resource transitions
Task switching may involve disengaging active cognitive mechanisms of one type and engaging other cognitive mechanisms of a different type to match task demands. For example, switching from a visual to an auditory task is more costly than the other way round. So captchas for example may benefit from starting as an auditory task.

**Visual Working Memory** holds, processes and operates on information of immediate importance. 

**Procedural Memory** stores and prepares motor action sequences. 

**Declarative Recall** generates and presents stored information on demand. 

**Semantic Recognition** determines whether factual information has been stored in memory.

**Episodic Recognition** determines whether information about experienced events have been stored in memory. 

The cost of switching between different cognitive mechanisms creates delay.

### Optimising the order of tasks

The authors modelled the process of checking in to an airline. They broke down each of the steps involved in checking in from a touch screen kiosk. These are very similar to the steps involved when checking in online. e.g. 
1. Go to airline website
2. Login 
3. Enter booking reference
4. Enter passport details
5. Enter baggage requirements
6. Select inbound seat
7. Select outbound seat
etc.

Each of these was then allocated a **primary cognitive mechanism** as well as a score for the **familiarity** of the task and its **complexity**. 

|task|primary cognitive mechanism|familiarity|complexity|
|---|---|---|---|
|1. Go to airline website|
|2. Login |
|3. Enter booking reference|
|4. Enter passport details|
|5. Enter baggage requirements|
|6. Select inbound seat|
|7. Select outbound seat|

The concept that reordering tasks can have an effect on usability comes from established principles in cognitive psychology.