function pick(val)
{
    document.getElementById("t").value += val;
}
function Clear()
{
    document.getElementById("t").value = "";
}
function Sol()
{
    var a=document.getElementById("t").value;
    var b=eval(a);
    document.getElementById("t").value=b;
}
