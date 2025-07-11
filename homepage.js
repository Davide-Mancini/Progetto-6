const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const parameters = new URLSearchParams(location.search);
const productId = parameters.get("productId");

const getProduct = function () {
  fetch(endpoint, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjhmZjc4Y2RkZjAwMTU1ZDY3OTgiLCJpYXQiOjE3NTIyMTc4NTUsImV4cCI6MTc1MzQyNzQ1NX0.-ZbIr_OGNQjl0vH0tZmEDvdYPsu33joFSeNEcwGikBg",
    },
  })
    .then((res) => {
      if (res.ok === true) {
        return res.json();
      } else {
        throw new Error("Errore");
      }
    })
    .then((product) => {
      console.log(product);
      product.forEach((pc, i) => {
        const row = document.getElementById("row");
        row.innerHTML += `<div class="col col-12 col-md-6 col-lg-4 d-flex" id='col' >
      <div class="card g-1 " >
  <img src="${pc.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body d-flex flex-column">
  
    <h3 class="card-title">${pc.name}</h3>
    <h5 class="card-title">${pc.brand}</h5>
    <p class="card-text flex-grow-1">${pc.description}</p>
    <h3 class="card-text  text-danger">${pc.price}€</h3>
    <a href='/paginadettaglio.html?productId=${pc._id}' class="btn btn-primary mb-2">DETTAGLI</a>
    <a href='/back-office.html?productId=${pc._id}' class="btn btn-warning" >MODIFICA</a>
  </div>
</div>
      </div>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
getProduct();
// const modifica = function () {
//   location.assign("/back-office.html?/" + productId);
// };
