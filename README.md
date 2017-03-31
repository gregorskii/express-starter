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
