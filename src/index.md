 ---
title: I don't understand micro-frontends
---

<!-- .slide: class="personio-slide" data-background-color="#FFF" -->

## I don't understand micro-frontends

19/09/2019

[Rafael Motta](https://github.com/rafaelmotta) @ Personio

---

## About me

- Senior Software Engineer @ Personio
- 🇧🇷 / 🏍/ 🚲 / ⛰

---

## About the talk

---

## Let's reflect a little bit...

---

## What went wrong?

- Legacy codebase
- Technical debts

---

## Software architecture

- Minimize the human resources required to build and maintain a system

---

## My first days at Personio

---

![](/images/build-time.png)
![](/images/scary.gif) <!-- .element: class="fragment" -->

---

<!-- .slide: data-background="./images/webpack.png" -->

---

- It's not trivial to have a bundler with a legacy codebase 😓
- We have a real monolith ⛓<!-- .element: class="fragment" -->

---

## Implementing a new feature

---

<!-- .slide: data-background="./images/payroll.png" -->

---

## I tried to improve the DX

![](/images/fail.webp)

---

## The signals

---

<!-- .slide: data-background="./images/pc-cra.jpeg" -->

---

- Make some UI changes was requiring a lot of time
- Easy to create spaghetti code <!-- .element: class="fragment" -->
- Deployments taking 1-2 day <!-- .element: class="fragment" -->

---

A good software architecture should minimize the human resources required to build and maintain a system

---

## Expectations

- Fast onboardings
- Teams not blocking each other <!-- .element: class="fragment" -->
- Fast deployments <!-- .element: class="fragment" -->
- Not necessary use 10 different libraries for the same purpose <!-- .element: class="fragment" -->

---

## Requirements

- 2 weeks for developing a POC AND migrate the payroll code
- Separated codebase (should work without the monolith) <!-- .element: class="fragment" -->
- Separated deployment <!-- .element: class="fragment" -->
- Fast <!-- .element: class="fragment" -->
- Should have some consistence <!-- .element: class="fragment" -->

Notes:

- This are some of the principles of MF. Each team should have automous from each other

---

## Implementations

---

<!-- .slide: data-background="./images/sol-1.png" -->

---

<!-- .slide: data-background="./images/sol-2.png" -->

---

<!-- .slide: data-background="./images/sol-3.png" -->

---

- It's all about the context of your App!
- We decided to go over a run-time integration using JS <!-- .element: class="fragment" -->

Notes:

- Edge Side Includes
- Personio is a B2B solution, we don't need too much performance as an e-commerce needs.
- We don't have SSR, and we are fine of not using it.

---

## How it looks like

![](/images/example-0.png)
![](/images/example-1.png)
![](/images/really.gif) <!-- .element: class="fragment" -->

---

## The implementation

![](/images/artifact.png)

---

## What helped us

- Code of payroll NOT relying on other domains (almost)
- Auth with cookies <!-- .element: class="fragment" -->

---

<!-- .slide: data-background="images/ds.png" -->

---

## Challenges

- Redux store
- Redux actions for navigation <!-- .element: class="fragment" -->
- Translations <!-- .element: class="fragment" -->

---

## State

- We don't share the same store with the monolith
- Which means it has a totally different configuration <!-- .element: class="fragment" -->

---

## Translations

- Started having the translations directly on the MF
- Recently we switch to a SaaS Tool <!-- .element: class="fragment" -->

---

## CI / deployment

![](/images/ci.png)

Notes:

- 1-2 days to deploy something

---

## DX

- < 5 minutes for running the project locally
- Hot / Live reloading <!-- .element: class="fragment" -->
- You own webpack file <!-- .element: class="fragment" -->

---

![](/images/sandbox-more.png)

---

## Integration with monolith

- Dev: we inject our bundle.js from the micro-frontend
- Prod: we just use from S3 (we can also setup locally) <!-- .element: class="fragment" -->

---

## Shared code

- Design System
- Dev tools: Eslint / Prettier <!-- .element: class="fragment" -->

---

## Libraries

- Webpack externals + UMD
  ![](/images/libraries.png)

---

## Dealing with legacy

---

<!-- .slide: data-background="./images/employees-list.png" -->

---

<!-- .slide: data-background="./images/employees-list-2.png" -->

---

<!-- .slide: data-background="./images/employees-list-3.png" -->

---

## Strangler Pattern

- Start small, just refactoring the edges of some screen <!-- .element: class="fragment" -->

---

## What should be a MF?

---

<!-- .slide: data-background="./images/rec.png" -->

---

- There are no rules, yet.
- We should avoid to have a very small MF <!-- .element: class="fragment" -->
- Ideally, a whole domain. <!-- .element: class="fragment" -->

---

## Creating from scratch

![](/images/generator.png)

---

## What will produce

![](/images/generator-1.png)

---

## Outcomes

- Challenges are just starting!
- Refactoring most of the application using MF <> MS <!-- .element: class="fragment" -->

---

## Downsides

- It requires some setup
- We can have duplicated libraries <!-- .element: class="fragment" -->
- Larger bundles <!-- .element: class="fragment" -->
- We need to improve resilience <!-- .element: class="fragment" -->

---

# Questions?

---
