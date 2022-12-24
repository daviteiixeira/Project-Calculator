function insert(numb)
{
    var numbb = document.getElementById(`resu`).innerHTML;
    document.getElementById(`resu`).innerHTML = numbb + numb;
}
function clean()
{
    document.getElementById(`resu`).innerHTML = "";
}
function back()
{
    var resu = document.getElementById(`resu`).innerHTML;
    document.getElementById(`resu`).innerHTML = resu.substring(0, resu.length -1);
}
function calcula()
{
    var resu = document.getElementById(`resu`).innerHTML;
    if(resu)
    {
        document.getElementById(`resu`).innerHTML = eval(resu);
    }
    else
    {
        document.getElementById(`resu`).innerHTML = "";
    }
}