document.addEventListener('DOMContentLoaded', function(){
    const requestURL= "https://randomuser.me/api/?results=5"
    const ulList = document.getElementById("people")
    function addPerson(person) {
        //create an li dom element and add it to my ul
        let newPerson = document.createElement("li")
        //let should contain info about the person
        //console.log(person.name)
        newPerson.innerText = person.name.first+ " " +person.name.last+ "/ birthday: " +person.dob.date.slice(0,10)
        ulList.appendChild(newPerson)
    }

    fetch(requestURL)
    .then(function(responseData){
        // Fetch will package the response into an object with some methods that allow us to do some useful things with the response
        // use the .json() method to return the data in JSON format
        console.log(responseData)
        return responseData.json()
    })
    .then(function(jsonData){
        // now we have the data in json format!
        // use it!
        //let firstPerson = jsonData.results[0].name
        //console.log("first person:", firstPerson.first, firstPerson.last)
        let people = jsonData.results
        console.log(jsonData)
        people.forEach(addPerson)
    })
    .catch(function(err){
        // any errors encountered in the request or the .then promise will be passed into this catch callback
        console.log("Oh no, there's been an error!", error)
    })
})