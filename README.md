# now-lambda-gen

Minimal reproduction for generating lambdas on ZEIT Now

See each branch for differenst approaches/tests. All fail unfortunately :(

## Description

Public build output for this test:

https://zeit.co/weahead/now-lambda-gen/5xujlhlxf

This branch tests if just outputing a JS file in `/api` gets picked up by ZEIT Now during build. It does NOT. `now-build` is only run if a JS file already exists in the repo on push/execution of `now`. My guess is that `@now/node` only gets included when JS files are auto detected in the uploaded files.

This is the simplest reproduction that I expected would "just work".

Expected: `/api/test.js` to be built as a lambda and deployed

Result: It does not build nor deploy `/api/test.js`.

## License

[MIT](LICENSE)
