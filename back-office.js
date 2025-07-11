const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const parameters = new URLSearchParams(location.search);
const productId = parameters.get("productId");
console.log(productId);
const productForm = document.getElementById("product-form");
class Product {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nomeInput = document.getElementById("name");
  const descrizioneInput = document.getElementById("description");
  const brandInput = document.getElementById("brand");
  const immaginiInput = document.getElementById("immagini");
  const priceInput = document.getElementById("price");
  const productToSave = new Product(
    nomeInput.value,
    descrizioneInput.value,
    brandInput.value,
    immaginiInput.value,
    priceInput.value
  );
  console.log(productToSave);
  let endpointUse;
  if (productId) {
    endpointUse = endpoint + "/" + productId;
  } else {
    endpointUse = endpoint;
  }
  let methodUse;
  if (productId) {
    methodUse = "PUT";
  } else {
    methodUse = "POST";
  }
  fetch(endpointUse, {
    method: methodUse,
    body: JSON.stringify(productToSave),
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjhmZjc4Y2RkZjAwMTU1ZDY3OTgiLCJpYXQiOjE3NTIyMTc4NTUsImV4cCI6MTc1MzQyNzQ1NX0.-ZbIr_OGNQjl0vH0tZmEDvdYPsu33joFSeNEcwGikBg",
    },
  })
    .then((res) => {
      if (res.ok === true) {
        alert("PRODOTTO INSERITO");
      } else {
        throw new Error("errore");
      }
    })
    .catch((err) => {
      alert("ERRORE");
      console.log(err);
    });
});
const eliminaProdotto = function () {
  fetch(endpoint + "/" + productId, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjhmZjc4Y2RkZjAwMTU1ZDY3OTgiLCJpYXQiOjE3NTIyMTc4NTUsImV4cCI6MTc1MzQyNzQ1NX0.-ZbIr_OGNQjl0vH0tZmEDvdYPsu33joFSeNEcwGikBg",
    },
  })
    .then((res) => {
      if (res.ok === true) {
        alert("PRODOTTO ELIMINATO");
      } else {
        throw new Error("ELIMINAZIONE NON COMPLETATA");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
const modificaProdotto = function () {
  if (productId) {
    fetch(endpoint + "/" + productId, {
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjhmZjc4Y2RkZjAwMTU1ZDY3OTgiLCJpYXQiOjE3NTIyMTc4NTUsImV4cCI6MTc1MzQyNzQ1NX0.-ZbIr_OGNQjl0vH0tZmEDvdYPsu33joFSeNEcwGikBg",
      },
    })
      .then((res) => {
        if (res.ok === true) {
          return res.json();
        } else {
          throw new Error("ERRORE");
        }
      })
      .then((dettagliProdotto) => {
        console.log(dettagliProdotto);
        const nome = document.getElementById("name");
        const descrizione = document.getElementById("description");
        const brand = document.getElementById("brand");
        const immagini = document.getElementById("immagini");
        const prezzo = document.getElementById("price");
        nome.value = dettagliProdotto.name;
        descrizione.value = dettagliProdotto.description;
        brand.value = dettagliProdotto.brand;
        immagini.value = dettagliProdotto.imageUrl;
        prezzo.value = dettagliProdotto.price;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
modificaProdotto();
