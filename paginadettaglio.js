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
    <p class="card-text flex-grow-1">${dettaglipc.description}</p>
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
