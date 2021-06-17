##  Setup Guideline
  ### Setup Sonarqube via docker
   1. Run command `docker -d --name sonarqube -p 9000:9000 sonarqube`
   2. Visit to `http://localhost:9000` to create your project then add to `sonar-project.properties`
   3. Create file in root your project named sonar-project.properties with content below (example). All configuration can be found in [Link](https://docs.sonarqube.org/latest/analysis/analysis-parameters/)
   ```.properties
    sonar.login=482014e9c2f83973e3febec9ad6385c4de0407fe
    sonar.host.url=http://localhost:9000
    sonar.sources=src
    sonar.tests=src/__tests__
    sonar.language=javascript
    sonar.projectKey=test-react
    sonar.exclusions=coverage/**, src/__tests__/**
    sonar.test.inclusions=src/__tests__/**
    sonar.javascript.lcov.reportPaths=coverage/lcov.info
    sonar.testExecutionReportPaths=reports/sonar-report.xml
   ```
   4. Install sonar-scanner locally, refer to
https://docs.sonarqube.org/latest/analysis/scan/sonarscanner
   5. Export your PATH depends on your operating system.

  ### How to start project.
  1. Clone this project to local machine and go to the folder
  ```
  git clone https://github.com/hoangnx30/sonarqube-reactjs.git
  cd sonarqube-reactjs
  ```
  2. Run `yarn` to install all package
  3. Run `yarn test` 
  4. Finally, run `sonar-scanner` then visit `http://localhost:9000` to see scan result.
  ### Setup Jest in ReactJs project from scratch
  1. Install package: **jest-sonar-reporter** via
  ```
    yarn add -D jest-sonar-reporter or
    npm i jest-sonar-reporter --save-dev
  ```
  2. Create **jest.config.json** with content 
  ```json
  {
    "collectCoverage": true,
    "coverageDirectory": "./coverage",
    "coveragePathIgnorePatterns": [
      "node_modules"
    ]
  }
  ```
  3. Add more config in package.json and change script test

  ```json
    ...
    "script": {
      "test": "react-scripts test --coverage --watchAll --detectOpenHandles --testResultsProcessor ./node_modules/jest-sonar-reporter/index.js"
    },
    "jestSonar": {
      "reportPath": "reports",
      "reportFile": "sonar-report.xml",
      "indent": 4
    }, 
    ...
  ```
