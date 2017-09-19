made-from-scratch react boiler.  with webpack & babel, yarn.

although `create-react-app` is great, sometimes you want a home cooked meal.

## client
- react 15
- webpack 3
- es6 via babel 6
- CSS modules
- Jest/Enzyme for testing
- eslint/standard & prettier for linting & JS standards
- lint-staged/husky for pre-commit lint checker

## server
- node 8.1.6
- express 4

## Run locally
1. change the `.env_sample` file to `.env`
2. change the apixu key... in lieu of `xxxxxxxxx`, add your own
3. confirm you have `yarn` installed (`npm install yarn -g`)
4. confirm you have node installed (`node -v`; fwiw, i have `v8.1.4`)
5. do the following:
```bash
$ yarn install
$ yarn start
-> http://localhost:8080
```

For testing, we use Jest + Enzyme, type: `$ yarn test`


## Principles
1. colocate CSS
2. css modules should be imported via style-loader & css-loader
3. JSX files have `.jsx` extension
4. one component, one file
5. dont block the event loop!
6. test coverage bro


## To Do
- [ ] see readme from `nri` repo
- [ ] add redux
- [ ] add react router 4
- [ ] add logging & error handling (https://github.com/mzabriskie/axios#handling-errors)
- [ ] less/sass/nextcss
- [ ] css linter
- [ ] use `static`
- [ ] proptypes, defaultProps, displayName
- [ ] loading spinner
- [ ] fix package.json proxy setting
- [ ] CSS/HTML: add reset/normalize
- [ ] add JSDoc (see below)
- [ ] remove `babel-preset-es2015` in favor of `babel-preset-env`


#### JSDoc
```javascript
/**
 * Some description here about what this method does
 * @param {string} range - param 1 description
 * @param {Object} data - param 2 description
 * @return {Object} something - return value from this function
 */
```
