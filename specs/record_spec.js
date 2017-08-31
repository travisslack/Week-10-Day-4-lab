var assert = require("assert");
var Record = require("../record.js");

describe("Record", function() {

var record;
beforeEach(function(){
  record = new Record("Keith & The Codeclan Boys", "Summer of code", "Country", 4.99 )
})

it("Should be able to create a Record object that has an Artist", function(){
  assert.strictEqual(record.artist, "Keith & The Codeclan Boys")
})

it("Should be able to create a Record object that has an Title", function(){
  assert.strictEqual(record.title, "Summer of code")
})

it("Should be able to create a Record object that has an Genre", function(){
  assert.strictEqual(record.genre, "Country")
})

it("Should be able to create a Record object that has an Price", function(){
  assert.strictEqual(record.price, 4.99)
})

it("Create a method that prints out the Record's properties as a string", function(){
  assert.strictEqual(record.details(), "Artist: Keith & The Codeclan Boys, Title: Summer of code, Genre: Country, Price: 4.99")
})



})