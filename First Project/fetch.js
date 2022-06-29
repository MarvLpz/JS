
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
goFetchOne = () => {
    fetch('https://reqres.in/api/users')// fetch function uses Promise, returns a promise
    // res and data are parameter names
    .then(res => res.json())// returns the entire http response, if using json(), it will extract the json contents body only
    .then(data => console.log(data))// second promise to parse the response body text as JSON
}

goFetchTwo = () => {

    fetch('https://reqres.in/api/users', {
    method: 'POST',
     // *GET, POST, PUT, DELETE, etc.
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded'
       
    },
    body: JSON.stringify({ //Convert a JavaScript object into a string with JSON.stringify().
        name: 'User 1'
    })
    }).then(res => {return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
}

goFetchThree = (url) => {
fetch(url).then(res => res.json()).then(data => console.log(data))
}

goFetchThree('https://reqres.in/api/users')