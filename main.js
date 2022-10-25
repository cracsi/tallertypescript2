import { Serie } from './Serie.js';
import {series} from './series.js';
let tableBody = document.getElementById('infoTabla');
let carta=document.getElementById('T2');
cargarDatosTabla(series);
promedioSeasons(series);
mostrarCarta("a");
// const br=document.getElementsById("Breaking");
// let or=document.getElementById('2');
// let got=document.getElementById('3');
// let bbt=document.getElementById('4');
// let sh=document.getElementById('5');
// let eng=document.getElementById('6');

// br.onclick= function () { alert("hhh"); };

function cargarDatosTabla(series) {
    series.forEach(se => {
        let trE = document.createElement("tr");
        let iid=se.name.split(" ")[0]
        console.log(iid)
        trE.innerHTML = `<td class="${iid}">${se.id}</td>
        <td class="${iid}"><a href="${se.link}">${se.name}</a></td>
        <td class="${iid}">${se.channel}</td>
        <td class="${iid}">${se.seasons}</td>`;
        tableBody.appendChild(trE);
    });
}

function promedioSeasons(series) {
    let avg=0;
    let cs=0;
    let ct=0;
    series.forEach(se => {
        cs+=1;
        ct+=se.seasons;
    });
    avg=ct/cs;
    document.getElementById("lineaAVG").innerHTML="Seasons average:"+avg;
}



// br.addEventListener("click",alert("df"),true);
// or.addEventListener("click",mostrarCarta(or),true);
// got.addEventListener('click',mostrarCarta(got),true);
// bbt.addEventListener('click',mostrarCarta(bbt),true);
// sh.addEventListener('click',mostrarCarta(sh),true);
// eng.addEventListener('click',mostrarCarta(eng),true);
// mostrarCarta("a");



function mostrarCarta(ser){
    carta.innerHTML=`<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
}