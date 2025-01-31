# Binance Coding Challenge

# !!!!! PLEASE READ BEFORE RUNNING TESTS !!!!!!

### Summary
This directory contains the UI Tests and WebSocket for the Binance.com, these tests are written in nodejs using
 nightwatch, 
 mocha
 allure
 
 
- LandingPage spec uses basic Nightwatch JS test flow
- PairTrading spec uses BDD style test

Each spec has page object assigned so that its easy even UI changes are present

 

### Utility Helpers
Helpers folder have different files
- schema has expected values to compare with dynamic data from web sockets
- allGlobals have global values declared to input values into test/ URL's


### Test Data
currently I have given from global file
 
 
### Installation
Once node is installed, execute:   

    npm install

### How do I run the tests on my local machine?

    npm test <PathToSpec>

    ex: npm test tests\spec\pairTrading.spec


### How do I run tests on different browsers?

    npm test --e <browser> <PathToSpec> 

    ex: npm test  --e local-chrome tests\spec\pairTrading.spec

### How do I run tests on saucelabs

    npm test --e <saucelabsBrowser>  <PathToSpec>

    ex: npm test --e sauce-safari  tests\spec\pairTrading.spec



### Generate Allure report 
    
    npm run report

Also HTML reports are available in reports folder with timestamps as fileName


### Websocket tests
    
  websocketLLine, websocketDepth - both files connect to websocket defined in globals and verify connection time.

  It validates the received data structure with the schema defined in helpers folder
  minimum and maximum values are defined in schema
