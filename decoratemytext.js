function ButtonClick() {
    alert("Hello, world!");
    let b = document.getElementById("textArea");
    let increase = 2;
    if (b.className == "highlighted"){
        let fontSize=parseInt(window.getComputedStyle(b).getPropertyValue('font-size')) ;
        b.style.fontSize= (increase+fontSize)+"pt";
    }else{
        b.className = "highlighted";

    }

    setInterval(ButtonClick, 500);


}

function CheckBox() {
    alert("CheckBox changed")
    let b = document.getElementById("textArea");
    let c = document.getElementById("bodyID");
    if (b.className == "checkBoxChange"){
        b.className = "clear";
        c.className= "clear"
    }else{
        b.className = "checkBoxChange";
        c.className = "AddImage"
    }



}

function pageLoad(){
    let a = document.getElementById("Button1")
    a.onclick = ButtonClick;

    let c = document.getElementById("checkBox");
    c.onchange = CheckBox;

}

window.onload =pageLoad;