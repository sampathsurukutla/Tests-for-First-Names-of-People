const namesList = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (namesList) => {
  return getFirstNames(namesList);
};

module.exports = getPeopleInCity;
