start cmd /k "cd fe && npm install && npm run dev"
start cmd /k "cd be && npm install && npm run dev"
start cmd /k "cd be && docker run -p 27017:27017 --name sinbar-mongodb sinbar-mongodb"