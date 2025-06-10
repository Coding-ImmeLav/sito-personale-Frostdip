
let a = 0; 

function compariMenu() {
    if (a==0)   {
        document.getElementById("menu").style.display = "initial";
        a = 1;
    }
    else if (a==1) {
        document.getElementById("menu").style.display = "none";
        a = 0;
    }
   
}

function cambiaTesto() {
    document.getElementById("Testo1").innerText = "La mia passione principale è quella di giocare a videogiochi\nche richiedono strategia";
}

function ritornaTesto() {
     document.getElementById("Testo1").innerText = "";
}

function cambiaTesto2() {
    document.getElementById("Testo2").innerText = "Mi piace leggere Manga/Manhwa per passare il tempo";
}

function ritornaTesto2() {
     document.getElementById("Testo2").innerText = "";
}
function cambiaTesto3() {
    document.getElementById("Testo3").innerText = "Guardare tornei di giochi";
}

function ritornaTesto3() {
     document.getElementById("Testo3").innerText = "";
}
function cambiaTesto4() {
    document.getElementById("Testo4").innerText = "Mi piace giocare a scacchi";
}

function ritornaTesto4() {
     document.getElementById("Testo4").innerText = "";
}