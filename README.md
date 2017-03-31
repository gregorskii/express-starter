# Express Starter

Simple Express starter with:

- Babel compiler and babel-watch
- ESlint (Airbnb)
- Bunyan Logging
- Mongoose/MongoDB with Bluebird for Promises
- Wallaby/Mocha Testing

# Running

Start mongo with its DB path in the `./data` folder:

```
mongod --dbpath ./data/
```

Create a `.env` file in the root:

```
MONGO_DB_URL=mongodb://localhost/express/starter
CORS_WHITELIST=http://localhost:8080,http://localhost:3000
```

Replace `/express/starter` with your db and table name.

Start the API:

```
npm run dev
```

Run the tests:

```
npm run test
```

Lint:

```
npm run lint
```
