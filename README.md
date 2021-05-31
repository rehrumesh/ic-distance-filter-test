# Filter Customers

This repository contains the solution for the question provided by Intercom to filter customers within a range of given point.

## Pre-requisites

The solution requires following:

- NodeJS
- Jest (will be installed with dependencies)

Once you have installed NodeJS, open a terminal and navigate to the project directory and execute following command:

```
npm install
```

## Run instructions

The program expects input file. File path can be found in `src/constants.js` as value `CUSTOMERS_FILE_PATH`. By default the output will be generated inside `resources/output.txt` . You can configure the output path using `OUTPUT_PATH` of `constants` .

Open a terminal and navigate to the directory. Then execute following command:

```
node .
```

## Test instructions

Code is tested using Jest library. Once you have installed dependencies mentioned in Pre-requisits section, open a terminal and navigate to the project directory. Then issue following command.

```
npm run test
```

## Assumptions

- Radius of the earth is 6371.009 KM

## Solution Structure

```
|- resources/
|   |-- customers.txt       - Input file
|   |-- output.txt          - Generated Output
|- src/             - Source files
|   |-- lib/        - Libraries
|   |    |-- GeoHelper/     - Contains the library functions and tests to calculate distance between two points
|   |    |-- IOHelper/      - Contains the library functions and tests required to do File IO
|   |    |-- MathHelper/    - Contains library functions and tests to convert degrees to radians
|   |-- models/  - Contians models and tests required in the application
|   |-- constants.js        - App constants
|   |-- IntercomEvent.js    - Intercom related file
|   |-- IntercomEvent.test.js    - Intercom related test file
|- index.js             - Main file
|- package-lock.json    - Dependenciy lock
|- package.json         - Meta info about the porject
|
```
