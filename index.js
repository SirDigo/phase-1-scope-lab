// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toLocaleUpperCase();
    return customerName;
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'stacy';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'karen';
    return leastFavoriteCustomer;
}