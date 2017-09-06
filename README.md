made-from-scratch react boiler.  with webpack & babel, yarn.

although create-react-app is great, sometimes you want a home cooked meal.

todo:
- [ ] see readme from `nri` repo
- [ ] add redux
- [x] add jest/enzyme
- [ ] add react router 4
- [ ] add logging
- [ ] less/sass/nextcss
- [ ] css linter
- [ ] jsdoc
- [x] `.babelrc` (see `nri` repo)
- [x] redux
- [ ] use `static`
- [x] add `.env` for env vars
- [ ] react router
- [ ] handle network errors, etc
- [ ] proptypes, defaultProps, displayName
- [ ] loading spinner
- [ ] fix package.json proxy setting
- [ ] CSS/HTML: semantic markup (`<nav>` `<main>` `<header>` `<section>` `<footer>`  `<fieldset>`)
- [ ] CSS/HTML: add reset/normalize
- [ ] CSS/HTML: convert to `border-box`

### client
- react 15
- webpack 3
- es6 via babel 6
- CSS modules
- Jest/Enzyme for testing
- eslint/standard & prettier for linting & code cleanliness

### server
- node 8.1.6
- express 4
- firebase for db

## Run locally
1. change the `.env_sample` file to `.env`
2. change the apixu key... in lieu of `xxxxxxxxx`, add your own
3. confirm you have yarn installed (`npm install yarn -g`)
4. confirm you have node installed (`node -v`; fwiw, i have `v8.1.4`)
5. do the following:
```bash
$ yarn install
$ yarn start
-> http://localhost:8080
```

For testing, we use Jest + Enzyme, type: `$ yarn test`


# Principles
1. colocate CSS
2. css modules should be imported via style-loader & css-loader
3. JSX files have `.jsx` extension
4. one component, one file
5. dont block the event loop!


#### JSDoc
```javascript
/**
 * Transform our data into daily, weekly, or monthly format
 * @param {string} range - Either `daily`, `weekly`, or `monthly`
 * @param {Object} data - The data from our weather API
 * @return {Object} something - The data consolidated by day, week, or month
 */
```
