//https://reqres.in/api/users
//notes fetch will only return error when theres a network error
//if url is incorrect, fetch ('link/wrong.json') then u will still get a response but with 404 not found proceeding details 
//by default, fetch() uses GET method request
getAPI = async (url,index) => {
    let mydata = await fetch(url).then(res => res.json()).then(data => console.log(data.data[index].email))
}

getAPI('https://reqres.in/api/users',0);

getListAPI = async (url,index) => {
    let email;
    let name;
    let mydata = await fetch(url).then(res => res.json()).then(data => {email = data.data[index].email; name = data.data[index].first_name});
    console.log(email);
    console.log(name);
}

getListAPI('https://reqres.in/api/users',3)

let data2 = fetch('https://reqres.in/api/users')

console.log(data2); //will return promise

data2.then(res => console.log(res.json())); // will return promise. Note that despite the method being named json(), 
                                            //the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
                                            // since .json will return another promise, you need to implement another then

data2.then(res => console.log(res));// will return representation of the entire http response u requested. palaisipan ung.json() prang walang ngyari

//http verbs https://www.youtube.com/watch?v=tkfVQK6UxDI
