# Update Number Demo
This repository demonstrates updating a number using different front-end approaches.
## Implementations
- **mpa-vanilla/** - Multi-Page Application (MPA) approach with full page reloads
- **ajax-vanilla/** - Fetch/XHR-based update without reloading
- **react/** - React app using useState for updates
- **mobx-react/** - React with MobX state management
- **lit-mobx/** - Lit with MobX for reactivity
- **backend/** - Simple Node.js Express API for handling number updates


# How the counter gets updated?

> **Note:** Initial page load is mostly the same for each: client enters URL, sending GET request, URL maps to backend webserver, server processes request sending back HTML.

## Update whole page

### Multi-page navigation
- Client (web browser) requests a new page, server does everything.
1. User clicks and form sends POST request to /update.
2. Server updates count in database and sends new page.
3. Browser reloads entire page.

---

## Developer updates DOM

### **AJAX**
- JavaScript updates DOM = partial reload.
1. User clicks and triggers event listener.
2. JS/X function sends POST request to /update.
3. Server updates count in database and sends new count as JSON.
4. JavaScript updates `count` element in DOM.

### **AJAX with SSR**
- JavaScript updates DOM with HTML instead of JSON, reducing reflows & repaints.
- Reflows & repaints can be reduced without SSR by writing better JS/CSS.
1. User clicks and event listener calls JavaScript, which sends POST request to /update.
2. Server updates count in database and sends new count as **HTML in JSON**.
3. JavaScript updates `count container's` `innerHTML` in DOM.

---

## Library updates DOM

### **React**
- JavaScript updates Virtual DOM which updates DOM.
1. User clicks and triggers event listener.
2. JS/X function sends POST request to /update.
3. Server updates count in database and sends new count (JSON).
4. JS/X passes new count to state updater function tied to `useState`, which changes Virtual DOM.
5. React decides when to update DOM.

### **React + MobX**
- JavaScript updates global state, which Virtual DOM watches to automatically update DOM.
1. User clicks and triggers event listener.
2. JS/X function sends POST request to /update.
3. Server updates count in database and sends new count (JSON).
4. MobX store updates its global observable count value.
5. Any React components observing the count automatically re-render.

*Curiously, what return statement from Counter function does now? I believe this goes to show that using React and MobX together is redundant because MobX preempts React.*

### **Lit**
- JavaScript updates state variables on Web Components, and Lit ensures efficient updating of DOM.
1. User clicks and triggers event listener.
2. JS function sends POST request to /update.
3. Server updates count in database and sends new count (JSON).
4. JS updates variable in Lit and updates only the affected elements in the DOM using Lit's Web Component return statement.

### **Lit + MobX**
- JavaScript updates state variables on Web Components, and Lit ensures efficient updating of DOM and MobX updates globals.
- Functionality in Lit elements react to MobX store.
1. User clicks and triggers event listener.
2. JS function sends POST request to /update.
3. Server updates count in database and sends new count (JSON).
4. JS updates variable in MobX store, and MobX updates only the affected elements in the DOM.

