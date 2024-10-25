function buttonClick(val)
{
    document.getElementById("screen").value+=val
}
function clearscreen(){
    document.getElementById("screen").value=""
}
    function total(){
        var values=document.getElementById("screen").value
        var result= eval(values)
        document.getElementById("screen").value=result
    }
