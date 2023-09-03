
![cypress-cucumber-gitactions-html-report](https://socialify.git.ci/HannaTarasevich/cypress-cucumber-gitactions-html-report/image?description=1&descriptionEditable=Cypress%2013%2B%20with%20Cucumber%2C%20GitHub%20actions%20workflow%20and%20possibility%20to%20run%20tests%20in%20parallel%20and%20generate%20HTML%20report&language=1&name=1&owner=1&theme=Light)




## Pre-requisites

- Install Node.js ([LTS](https://nodejs.org/en))


## Install the project

- Clone repository:
```bash
  git clone https://github.com/HannaTarasevich/cypress-cucumber-gitactions-html-report.git
```
The repository can be forked as well.

- Install project dependencies:

```bash
  npm install
```
    
## Running Tests

- To run tests using Cypress UI:

```bash
  npm run cypress:open
```

- To run tests in headless mode:

```bash
  npm run cypress:run
```

- To run tests in parallel mode (number of threads can be changed inside the script, `2` threads are by default):

```bash
  npm run cypress:parallel
```

- To run tests by tag (`@smoke` is by default):

```bash
  npm run cypress:execution-tags
```


## Generate report

- To generate report (it will be shown right after generating, path to report is `cypress/reports/index.html`):

```bash
  npm run report:generate
```
## Project structure

    .
    ├── ...
    ├── cypress                  # Test files (alternatively `spec` or `tests`)
    │   └── e2e                  # End-to-end tests
    │       ├── data             # Test data (users credentials, URLs) 
    │       ├── features         # Files with test scenarios written in Gherkin 
    │       ├── step_definitions # Step definitions with Given, When, Then
    │       └── pages            # Page object models (locators, interactions)
    │   └── support              # Files for supporting automation tests
    └── ...

## License

- [ISC](https://choosealicense.com/licenses/isc/)


## Useful links:

 - [Cypress documentation](https://docs.cypress.io/guides/overview/why-cypress)

