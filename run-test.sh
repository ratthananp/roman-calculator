
docker run --rm --workdir /app/ --volume $PWD:/app/ node:12-alpine sh -c 'npm install && npm run test'