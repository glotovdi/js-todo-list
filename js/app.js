window.onload= function () {
var form=document.getElementById("form");
var list=document.getElementById("list");

form.onsubmit= function () {
    var input=document.getElementById("input")
    render(input.value);
    input.value="";
    return false;
}
function render (msg) {

    var div = document.createElement('li');
    var del = document.createElement('span');
    var check = document.createElement('input');
    var txt = document.createElement('span')
    var label = document.createElement('label')
    check.type="checkbox";
    check.className="checkbox";
    div.className = "list__item clearfix";
    txt.innerHTML = msg;
    txt.className = "txt";
    txt.id= "txt";
    del.className = "list__item-del glyphicon glyphicon-remove";
    del.innerHTML = "x";
    label.appendChild(check)
    div.appendChild(label);
    div.appendChild(txt);
    div.appendChild(del);
    list.appendChild(div);


    del.onclick= function () {
        this.parentNode.style.display="none";
    }
    check.onclick= function () {
        this.parentNode.parentNode.querySelector("#txt").classList.toggle("txt-done");
    }

}

}