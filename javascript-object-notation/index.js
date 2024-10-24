// JSON - javascript object notation - data-interchange format
// typically used for exchanging data between a server and a web application
// json files {key:value} OR [value1, value2, value3]

// JSON.string() - converts a js object into a JSON string
// JSON.parse() - converts a JSON string into a js object

//const jasonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;

//const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
//const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
//                {"name": "Patrick", "age": 35, "isEmployed": false},
//                {"name": "Squidward", "age": 50, "isEmployed": false},
//                {"name": "Sandy", "age": 27, "isEmployed": false}]`;

//const parseData = JSON.parse(jsonPeople);

//console.log(parseData);

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.error(error));