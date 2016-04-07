//Define Check object
var Check = function (tableNumber, people) {
    this.table = tableNumber;
    this.people = people;
};
Check.prototype.foodTotal = function () {
    var foodTotal = 0;
    this.people.forEach(function (value) {
        foodTotal += value;
    });
    return foodTotal;
};

Check.prototype.taxTotal = function () {
    return this.foodTotal() * 0.06;
};
Check.prototype.tipTotal = function () {
    return this.foodTotal() * 0.20;
};

//Define Person object
var Person = function (name, food) {
    this.name = name;
    this.food = food;
};

Person.prototype.dinerFoodTotal = function () {
    var dinerFoodTotal = 0;
    this.food.forEach(function (value) {
        dinerFoodTotal += value;
    });
    return dinerFoodTotal;
};

Person.prototype.dinerTax = function () {
    return this.dinerFoodTotal() * 0.06;
};

Person.prototype.dinerTip = function () {
    return this.dinerFoodTotal() * 0.20;
};

//Add diners
var diner1 = new Person("Bob", [8, 9, 10, 11]);
var diner2 = new Person("Rob", [4, 5, 6, 7, 8]);
var diner3 = new Person("Dob", [11, 12, 1, 2, 3]);

//Add new check
var check1 = new Check(1, [diner1, diner2, diner3]);


//Output
console.log("Total bill: " + (check1.foodTotal() + check1.taxTotal() + check1.tipTotal()));
console.log(diner1.name + " pays " + (diner1.dinerFoodTotal() + diner1.dinerTax() + diner1.dinerTip()));
console.log(diner2.name + " pays " + (diner2.dinerFoodTotal() + diner2.dinerTax() + diner2.dinerTip()));
console.log(diner3.name + " pays " + (diner3.dinerFoodTotal() + diner3.dinerTax() + diner3.dinerTip()));
