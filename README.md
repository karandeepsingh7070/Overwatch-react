# 🔁 React PubSub V2

A modern, TypeScript-first implementation of the **Publisher-Subscriber pattern** designed specifically for React and Next JS. Built with reusability, dev experience, and component-level state/event tracking in mind.

> An evolution of an internal utility that leverages the singleton + pubsub pattern, now tailored for React with hooks, types, and auto-cleanup.

---

## 🧠 Why This Exists

In many apps, especially where component trees are deep or context feels too rigid, there's a need for **cross-component communication** that’s decoupled and clean.

This library:

- Offers a **central event bus** using the pubsub model.
- Leverages **custom React hooks** to subscribe and publish events.
- **Automatically unsubscribes** on component unmount.
- Tracks **which component** subscribed to which event.
- Is fully written in **TypeScript** and is easily tree-shakable.

---

## ✨ Features

- ✅ Singleton pubsub pattern
- ✅ Type-safe subscriptions using generics
- ✅ `useEvent()` hook for subscriptions
- ✅ `useBroadcast()` hook for publishing
- ✅ Auto-unsubscribe on unmount (no memory leaks)
- ✅ Error handling per event per subscriber
- ✅ Logs subscriber component names in development
- ✅ Works in Vite, CRA, and Next.js
- ✅ Lightweight — no external dependencies

---

## 📦 Core Modules

### 🔹 `pubsub.ts`
The core singleton implementation, managing all event mappings.

### 🔹 `useEvent.ts`
Custom React hook for subscribing to events, tied to component lifecycle.

### 🔹 `useBroadcast.ts`
Simple hook to emit events from any component.

---

## 🧩 Ideal Use Cases

- Decoupled communication between unrelated components
- Temporary global states (e.g., flash messages, user actions)
- Avoiding prop drilling or overusing React Context

---

## 🛠 Future Plans

- [ ] Wildcard event matching (`*`, `user:*`, etc.)
- [ ] Event replay or buffering
- [ ] DevTools extension or visualizer
- [ ] React Native support

---

## 📜 License

MIT — feel free to fork and adapt.

---

**Made with purpose, and reusability.**
