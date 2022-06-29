function cancel()
{
    document.getElementById("txt").value = '';
}

function del()
{
    let currval = document.getElementById("txt").value
    currval = currval.substring(1,currval.length);
    document.getElementById("txt").value = currval;
}

function inputval()
{
    document.getElementById("txt").value = document.getElementsByClassName("num");
}

class Calculator
{

}