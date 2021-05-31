const { getCustomersWithinDistance } = require('./src/IntercomEvent');
const { Customer, printCustomers } = require('./src/models/Customer');
const {
  CUSTOMERS_FILE_PATH,
  THRESHOLD_DISTANCE,
  DUBLIN_OFFICE,
  OUTPUT_PATH,
} = require('./src/constants');
const {
  readFile,
  mapLinesToJSONArray,
  writeFile,
} = require('./src/lib/IOHelper/IOHelpers');

const filterCustomers = () => {
  console.log('Reading input file');
  const content = readFile(CUSTOMERS_FILE_PATH);

  console.log('Parsing customers');
  const customers = mapLinesToJSONArray(content).map(
    (customer) =>
      new Customer(
        customer.name,
        customer.user_id,
        +customer.latitude,
        +customer.longitude
      )
  );

  console.log('Filtering customers within range');
  const selectedCustomers = getCustomersWithinDistance(
    customers,
    THRESHOLD_DISTANCE,
    DUBLIN_OFFICE.latitude,
    DUBLIN_OFFICE.longitude
  );

  console.log('Preparing output');
  const outputContent = printCustomers(selectedCustomers);

  console.log('Generating output file');
  writeFile(OUTPUT_PATH, outputContent);

  console.log('Output successfuly generated: ' + OUTPUT_PATH);
};

filterCustomers();
