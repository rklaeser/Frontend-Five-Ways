#!/bin/bash

# Start backend
(cd backend && node index.js) &

# Start MPA server
(cd mpa-vanilla && python3 -m http.server 8001) &

# Start AJAX server
(cd ajax-vanilla && python3 -m http.server 8002) &

# Start React app
(cd react && npm run dev) &

# Start MobX + React app
(cd mobx-react && npm run dev) &

# Start Lit + MobX app
(cd lit-mobx && npx serve .) &

echo "All services started!"
