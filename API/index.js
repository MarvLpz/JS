
fetchData = async (url,index) => {
    let datafetched = await fetch(url).then(res => res.json()).then(data => {
        document.getElementById("myid").innerHTML = data.data[index].id;
        document.getElementById("myemail").innerHTML = data.data[index].email;
        document.getElementById("myname").innerHTML = data.data[index].first_name;
    })
}

let gatheredData = (mydata) => {
    return mydata;
}

$("#datahere").load("https://localhost:44322/api/People/GetFirstNames", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
    alert("External content loaded successfully!");
    if(statusTxt == "error")
    alert("Error: " + xhr.status + ": " + xhr.statusText);
});


// fetchData('https://reqres.in/api/users',0)