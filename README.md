# JavaScript: Basics to Advanced ✨

> A complete JavaScript learning repo — 13 topic folders covering fundamentals, DOM manipulation, OOP, async patterns, events, and the call stack. No setup required, just open and run.

Each folder is a standalone set of `.js` files with working examples and inline comments. Open any file in VS Code, run it in the browser console or with Node.js, and start experimenting.

---

## Table of Contents

- [Topics Covered](#topics-covered)
- [How to Use](#how-to-use)
- [Recommended Learning Order](#recommended-learning-order)
- [Prerequisites](#prerequisites)
- [About](#about)

---

## Topics Covered

| Folder | Topic | What's Covered |
|---|---|---|
| `01_basics` | Foundations | Numbers, dates, type coercion, memory basics |
| `02_basics` | Functions | Declaration, expressions, parameters, return values, arrow functions |
| `03_basics` | Array Methods | `forEach`, `map`, `filter`, `find`, `reduce`, higher-order functions |
| `04_iterations` | Iteration Deep Dive | `map`, `filter`, `reduce` with real examples |
| `callStack` | Call Stack & Closures | How JS executes code, scope chain, closures, lexical environment |
| `Events` | Event Handling | `addEventListener`, click/keypress events, event bubbling, delegation |
| `Dom` | DOM Basics | Selecting elements, modifying content, attributes, styles |
| `DomProjects` | DOM Projects | Interactive browser projects applying DOM manipulation |
| `Fun_js` | Fun Snippets | Short experiments and miscellaneous JS patterns |
| `09_advance_One` | Advanced JS | Prototypes, `this`, AJAX, advanced patterns |
| `10_object_oriented_programing` | OOP | Classes, constructors, inheritance, `bind`/`call`/`apply`, getters/setters |
| `Async_JavaScript` | Async JS | Callbacks, Promises, `async/await`, error handling |

---

## How to Use

No installation. No build step. Just clone and open files.

```bash
git clone https://github.com/Wcoder547/Javascript.git
cd Javascript
```

**Option 1 — Run in Node.js:**
```bash
cd 03_basics
node arrayMethods.js
```

**Option 2 — Run in the browser:**
Open any `.html` file directly in your browser, or paste code into the DevTools console (`F12 → Console`).

**Option 3 — VS Code:**
Open the repo folder in VS Code and use the built-in terminal to run files with Node.js.

---

## Recommended Learning Order

```
01_basics → 02_basics → 03_basics → 04_iterations → callStack
  → Events → Dom → DomProjects → Fun_js
  → 09_advance_One → 10_object_oriented_programing → Async_JavaScript
```

`callStack` before DOM — understanding how JavaScript executes code makes the browser behaviour in DOM and async examples much less confusing.

**Already know the basics?** Jump straight to `09_advance_One`, `10_object_oriented_programing`, or `Async_JavaScript`.

---

## Prerequisites

Nothing for the basics. For the advanced folders:
- A browser with DevTools (Chrome, Firefox)
- Node.js for running `.js` files in the terminal ([nodejs.org](https://nodejs.org))

---

## About

This repo is a living JavaScript reference — built by working through the language from the ground up, writing examples that actually explain the tricky parts: why closures work the way they do, how the call stack and event loop interact, what `this` means in different contexts, and how `async/await` is just syntax sugar over Promises.

The DOM projects folder bridges theory and practice — taking what you learn in the basics and building something visible in the browser.

**Built by [Waseem Akram](https://www.linkedin.com/in/wasim-akram-dev/)** — Full-Stack Developer and DevOps Engineer based in Pakistan, working across the MERN stack, Generative AI integrations, and cloud automation.

---

*If this helped you, consider giving it a ⭐*
