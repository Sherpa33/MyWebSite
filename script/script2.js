//document.write("<h1><font face="Verdana,Arial,Helvetica,Sansserif">Il mio secondo script</font></h1>");
//alert("Footer articolo");
//window.open('sponsor.htm','miaFinestra','width=300,height=300,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no');

//var x = document.getElementById("myAnchor");

function myFunction() {
  var x = document.getElementById("myAnchor").href;
  document.getElementById("demo").innerHTML = x;
}
function ameFunsion() {
  utente=27
  nomeUtente=prompt("Scrivi il tuo nome","il tuo nome");
  document.write("Benvenuto "+nomeUtente+"! Tu sei l'utente nr. "+utente);
}
function finest() {
  largFinestra=300;
  altFinestra=300;
  sinistra=screen.width-largFinestra;
  alto=(screen.height-altFinestra)/2;
  miaFinestra=window.open("sponsor.htm","", "left="+sinistra+",top="+alto+",width="+largFinestra+",height="+altFinestra+",menubar,toolbar");
}
function uscita() {
  miaFinestra.close();
}
function apriFinestra(nome,dim_x,dim_y,link) {
  larghFinestra=dim_x;
  altezFinestra=dim_y;
  sinistra=screen.width-larghFinestra+20;
  alto=(screen.height-altezFinestra)/2;
  window.open(link,nome,"left="+sinistra+",top="+alto+",width="+larghFinestra+",height="+altezFinestra+",menubar,toolbar,resizable");
}
function valida() {
  //prendo i valori dei campi, abbreviandone i nomi
  eta=dati.eta.value;
  email=dati.email.value;

  if (isNaN(eta)){
    alert ("Inserisci un’età valida");
    return false;
  }

  if (email.indexOf("@")==-1) {
    alert ("Inserisci un'email valida");
    return false;
  }
}
function calcolo_altezza() {
  if (screen.width<=640) return altezzaCella=80;
  else if ((screen.width<=800)&&(screen.width>640)) return altezzaCella=100;
  else if ((screen.width>800)&&(screen.width<=1024)) return altezzaCella=150;
  else return altezzaCella=200;
}
function classe() {
  alunni=new Array("Aldo","Giovanni","Giacomo","Mario","Gianni","Monica");
  voti=new Array(3,8,5,7,4,4);
  i=0;
  while(i<alunni.length) {
    document.write("<tr>");
    document.write("<td>"+alunni[i]+"</td>");
    document.write("<td>"+voti[i]+"</td>");
    document.write("</tr>");
    i++;
  }
}
function inizializza() {
  if (document.all) {  // creo le variabili per la sintassi di IE
    documento="document.all";
    parA="["";
    parB=""]";
    visibilita=".style.visibility";
    nascosto=""hidden"";
    visibile=""visible"";
    alert(documento+parA+"mioLiv"+parB+visibilita+"="+nascosto+";");
  }
  else if (document.layers){ //NN4
    documento="document.layers";
    parA="["";
    parB=""]";
    visibilita=".visibility";
    nascosto=""hide"";
    visibile=""show"";
    alert(documento+parA+"mioLiv"+parB+visibilita+"="+nascosto+";");
  }
  else if (document.getElementById) { // Opera e NN6
    documento="document.getElementById";
    parA="("";
    parB="")";
    visibilita=".style.visibility";
    nascosto=""hidden"";
    visibile=""visible"";
    alert(documento+parA+"mioLiv"+parB+visibilita+"="+nascosto+";");
  }
}
function nascondi() {
  eval(documento+parA+"mioLiv"+parB+visibilita+"="+nascosto+";");
}
function mostra() {
  eval(documento+parA+"mioLiv"+parB+visibilita+"="+visibile+";");
}
