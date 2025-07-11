const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const parameters = new URLSearchParams(location.search);
const productId = parameters.get("productId");
fetch(endpoint + "/" + productId, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjhmZjc4Y2RkZjAwMTU1ZDY3OTgiLCJpYXQiOjE3NTIyMTc4NTUsImV4cCI6MTc1MzQyNzQ1NX0.-ZbIr_OGNQjl0vH0tZmEDvdYPsu33joFSeNEcwGikBg",
  },
})
  .then((res) => {
    if (res.ok === true) {
      return res.json();
    } else {
      throw new Error("errore");
    }
  })
  .then((dettaglipc) => {
    console.log(dettaglipc);
    const row = document.getElementById("row");
    row.innerHTML += `<div class="col col-6 d-flex justify-content-center" >
      <div class="card g-1 " >
  <img src="${dettaglipc.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body d-flex flex-column">
  
    <h3 class="card-title">${dettaglipc.name}</h3>
    <h5 class="card-title">${dettaglipc.brand}</h5>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         DESCRIZIONE
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="card-text flex-grow-1">${dettaglipc.description}</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        SPECIFICHE
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       Schermo

Risoluzione

1920 x 1080 Pixel

Touchscreen

No

Frequenza frame

60 Hz

Diagonale schermo (pollici)

15.6 "

Rapporto immagine

16:9

Tipo di schermo

WLED

Caratteristiche schermo

Schermo antiriflesso

RAM

Dimensione memoria RAM

16 GB

Memoria massima supportata

16 GB

Processore

Processore

Ryzen 5 7520U

Marca processore

AMD

Modello di processore

Ryzen™ 5

Velocità processore

2.8 GHz

Velocità processore con turbo

4.3 GHz

Tipo di memoria cache

Cache di terzo livello (MB): 4

Chipset

AMD, SoC

NPU (Neural Processing Unit)

TOPS totali (Tera operatori al secondo)

0

Scheda grafica

scheda grafica

Radeon™ Onboard Graphics

Graphics card model

AMD Radeon

Produttore del chipset grafico

AMD



Mostra tutti i dettagli

Sicurezza generale del prodotto
Sicurezza generale del prodotto

GTIN

0198701804307

Tipo di prodotto

NOTEBOOK


      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        DISPLAY
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        DISPLAY FHD 
    </div>
  </div>
</div>
   
    <h3 class="card-text  text-danger">${dettaglipc.price}€</h3>
    <a href='/paginadettaglio.html?productId=${dettaglipc._id}' class="btn btn-primary mb-2">DETTAGLI</a>
    <a href='/back-office.html?productId=${dettaglipc._id}' class="btn btn-warning" >MODIFICA</a>
  </div>
</div>
      </div>`;
  })
  .catch((err) => {
    console.log(err);
  });
