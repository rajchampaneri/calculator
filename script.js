/*let String = "";
let Buttons = document.querySelectorAll('.Button');
Array.from(Buttons).forEach((Button)=>{
    Button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '='){
            string=evel(string);
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == "C"){
            string="";
            document.querySelector("input").value = string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})*/
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
