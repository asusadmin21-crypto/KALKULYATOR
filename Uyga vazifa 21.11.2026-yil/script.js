function btn() {
    document.getElementById('text').style.color = document.getElementById("ranglar").value;
    document.getElementById('text').style.fontSize = document.getElementById("shrift").value;
    document.getElementById('text').style.fontWeight = document.getElementById("raqam").value;
    document.getElementById('text').style.email = document.getElementById("email").value;
}

function btnB(){
    document.getElementById('text').style.fontWeight = "900";
}
function btnU(){
    document.getElementById('text').style.textDecoration = "underline";
}
function btnI(){
    document.getElementById('text').style.fontStyle = "italic";
}
