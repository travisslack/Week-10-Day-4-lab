var assert = require("assert");
var Record = require("../record.js");
var RecordStore = require("../record_store.js");
var Customer = require("../customer.js");

describe("RecordStore", function() {

var recordStore;
var record1;
var record2;
var customer;
beforeEach(function(){
  customer = new Customer(100);
  record1 = new Record("Keith & The Codeclan Boys", "Summer of code", "Country", 4.99 )
  record2 = new Record("Universally Challenged", "JavaScary", "Electronic", 3.99 )
  recordStore = new RecordStore("Keith's CodeClan Beats", "Edinburgh")
})

it("Should be able to create a Record Store object that has an name", function(){
  assert.strictEqual(recordStore.name, "Keith's CodeClan Beats");
})

it("Should be able to create a Record Store object that has an city", function(){
  assert.strictEqual(recordStore.city, "Edinburgh");
})

it("Should be able to create a Record Store object that has an records", function(){
  assert.strictEqual(recordStore.records.length, 0);
})

it("Should be able to create a Record Store object that has an balance", function(){
  assert.strictEqual(recordStore.balance, 0);
})

it("Should be able to add Records to a Record Store object", function(){
  recordStore.addRecord(record1);
  assert.strictEqual(recordStore.records.length, 1);
})


it("Create a method that lists the inventory", function(){
  recordStore.addRecord(record1);
  recordStore.addRecord(record2);
  assert.deepStrictEqual(recordStore.listRecords(), ["Summer of code", "JavaScary"])
})

it("Create a method so the Record Store can sell a Record and adjusts the Store's balance to account for the Record being sold.", function(){
  recordStore.addRecord(record1);
  recordStore.addRecord(record2);
  recordStore.sellRecord(record2);
  assert.strictEqual(recordStore.balance, 3.99)
  assert.deepStrictEqual(recordStore.records, [record1])
})

it("Create a method that reports the financial situation of the Store. Balance and value of inventory.", function(){
  recordStore.addRecord(record1);
  recordStore.addRecord(record2);
  assert.strictEqual(recordStore.financials()[0], 0)
  assert.strictEqual(recordStore.financials()[1], 8.98)
})

it("Create a method that allows the store to view all Records of a given Genre.", function(){
  recordStore.addRecord(record1);
  recordStore.addRecord(record2);
  assert.deepEqual(recordStore.filterByGenre("Country"), [record1])
})

it("The RecordCollector should have cash that increase and decreases with buying and selling.", function(){
  customer.cash = 0;
  recordStore.balance = 100;
  customer.records.push(record1);
  recordStore.BuyCustomerRecord(record1, customer);
  assert.deepEqual(customer.cash, 4.99)
  assert.deepEqual(customer.records.includes(record1), false)
  assert.deepEqual(recordStore.records.includes(record1), true)
})

it("The RecordCollector should have cash that increase and decreases with buying and selling.", function(){
  customer.cash = 0;
  recordStore.addRecord(record1);
  recordStore.sellRecordToCustomer(record1, customer);
  assert.deepEqual(recordStore.balance, 0)
  assert.deepEqual(customer.records.includes(record1), false)
  assert.deepEqual(recordStore.records.includes(record1), true)
})



})