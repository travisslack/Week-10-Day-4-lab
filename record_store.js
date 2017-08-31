var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = 0;
}

RecordStore.prototype.addRecord = function(record){
  this.records.push(record);
}

RecordStore.prototype.listRecords = function(){
  var recordTitles = [];
  for(var record of this.records){
    recordTitles.push(record.title);
  }
  return recordTitles
}

RecordStore.prototype.sellRecord = function(record){
  this.balance += record.price;
  var index = this.records.indexOf(record);
  this.records.splice(index, 1);
}

RecordStore.prototype.sellRecordToCustomer = function(record, customer){

  if (customer.cash >= record.price) {
    this.balance += record.price;
    customer.cash -= record.price;
    customer.records.push(record);

    var index = this.records.indexOf(record);
    this.records.splice(index, 1);
  }
}

RecordStore.prototype.BuyCustomerRecord = function(record, customer){

  if (this.balance >= record.price) {
    this.balance -= record.price;
    customer.cash += record.price;
    this.records.push(record);

    var index = customer.records.indexOf(record);
    customer.records.splice(index, 1);
  }
}


RecordStore.prototype.financials = function(){
  var financialsArray = [];
  financialsArray.push(this.balance);
  
  var recordsValue = 0;

  for(var record of this.records){
    recordsValue += record.price;
  }

  financialsArray.push(recordsValue);
  return financialsArray;
}

RecordStore.prototype.filterByGenre = function(genre){
  return this.records.filter( element => element.genre === genre);
}

module.exports = RecordStore;