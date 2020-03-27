# now-lambda-gen

Minimal reproduction for generating lambdas on ZEIT Now

See each branch for differenst approaches/tests. All fail unfortunately :(

## Description

Public build output for this test:

https://zeit.co/weahead/now-lambda-gen/qvj7kuv3n

This branch tests if adding `includeFiles` to `functions` in `now.json` includes any generated JS file as lambdas.

Added:
```json
"functions": {
  "api/**/*.js": {
    "includeFiles": "api/**/*.js"
  }
}
```

Expected: `/api/test.js` to be built as a lambda and deployed

Result: It does not build nor deploy `/api/test.js`.

## License

[MIT](LICENSE)
