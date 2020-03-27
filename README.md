# now-lambda-gen

Minimal reproduction for generating lambdas on ZEIT Now

See each branch for differenst approaches/tests. All fail unfortunately :(

## Description

Public build output for this test:

https://zeit.co/weahead/now-lambda-gen/d76zu0wwr

This branch test is the same as `master` except it has a dummy JS file in `/api` just to trigger `@now/node` to run `now-build`.

Expected: `/api/test.js` to be built as a lambda and deployed

Result: It does not build nor deploy `/api/test.js`, only `/api/dummy.js`

## License

[MIT](LICENSE)
