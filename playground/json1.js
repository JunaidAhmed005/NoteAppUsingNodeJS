// convert object to string
var obj = {
    name: "Junaid"
};

// JSON.stringify(onject) => take an object and convert it into string
var stringObj = JSON.stringify(obj);

console.log("Type of :",typeof stringObj, ",value :", stringObj);

// conver string to its real form (object)
var personString = '{"name": "Ahmed", "age": 23}';

// JSON.parse(string) => take string and convert it to object
var person = JSON.parse(personString);

console.log("Type of :", typeof person, ",value :", person);
