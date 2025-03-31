# Sinister Six

Six ways to get data from the JSONplaceholder API

- Vulture - Basic fetch with promises 🦤
- Sandman - Fetch w/ async/await ⏳
- Mysterio - Axios 🔮
- Doc Ock - Fetch w/ custom configuration 🐙
- Kraven - XMLHttpsRequest (oldie but goldie) 🐆
- Electro - Custom wrapper w/ fetch or axios ⚡

## How to Run

- For projects Vulture, Sandman and Kraven use LiveServer
- For projects Mysterio, Doc Ock and Electro run the following:

1. npm install
2. npm run dev

## What I learned

- .then is a gatekeeper for Promise success
- .innerHTML doesn't append content, it replaces content within an element with new content
- .textContent is a cooler .innerHTML
- fetch + async/await is VERY clean and easy to understand
- don't forget to call async/await function
- be sure to add a return() always in React components
- React takes care of all DOM manipulation
