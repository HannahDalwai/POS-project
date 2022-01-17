let products = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : 
[
  {
  title:"Watercolour set",
  category:"Paint",
  price:"60.70",
  img:"https://i.postimg.cc/kMBydd6X/watercolor.jpg"
  },
  {
  title:"Pencil 12pc set",
  category:"Pencils",
  price:"30.00",
  img:"https://i.postimg.cc/4xS9PYP6/pencil.jpg"
  },
  
  {
  title:"A3 Sketch book",
  category:"Books",
  price:"37.90",
  img:"https://i.postimg.cc/GpqQJLNG/sketch-book.jpg"
  },
  
  {
  title:" Paint brushes 10pcs",
  category:"Paint",
  price:"55.00",
  img:"https://i.postimg.cc/cJ4jNbG7/brushes.jpg"
  },    
  ]
  console.log(products);
  let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

  function displayProducts(products){
    document.querySelector("#products").innerHTML = "";

    products.forEach((product, position) => {
        document.querySelector("#products").innerHTML += `
        <div class="card d-inline-flex p-2 bd-highlight" style="width: 18rem;">
        <img id="img" class="card-img-top" src="${product.img}" alt="Card image cap">
        <div class="card-body">
            <h4 id="title" class="card-title">${product.title}</h4>
            <h5 id="category" class="card-title">${product.category}</h5>
            <p id="price" class="card-text">R${product.price}</p>
            <div>
            <button class="btn btn-danger" onclick="deleteProduct(${position})">Delete</button>
            <button id="editBtn" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal${position}"><i class='bx bxs-pencil'></i></button>

        <p> Quantity:</p>
                <input type="number" name="Quantity" class="form-control mb-2" id="quantity${position}" min="1" value="1">
                <button class="btn btn-success mt-1" onclick="addToCart(${position})">Add to cart</button>

            <div/>
        </div>
        </div>
    
        <div class="modal fade" id="editModal${position}" tabposition="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">Editing ${product.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label for="continrnt">Image:</label>
                        <input type="text" class="form-control w-50 mb-2" id="imgEdit${position}" placeholder="Image URL" autofocus  value="${product.img}"><br>
                        <label for="continrnt">Title:</label>
                        <input type="text" class="form-control w-50 mb-2" id="titleEdit${position}" placeholder="Enter title" value="${product.title}"><br>
                        <label for="continrnt">Category:</label>
                        <input type="text" class="form-control w-50 mb-2" id="categoryEdit${position}" placeholder="Enter category" value="${product.category}"><br>
                        <label for="continrnt">Price:</label>
                        <input type="text" class="form-control w-50 mb-2" id="priceEdit${position}" placeholder="Enter price" value="${product.price}">
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="updateProduct(${position})">Edit product</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}
displayProducts(products);
// CREATE
function createProduct(){
    let img = document.querySelector("#img").value;
    let title = document.querySelector("#title").value;
    let category = document.querySelector("#category").value;
    let price = document.querySelector("#price").value;



    try {
          if (!title || !price || !img) throw new Error("Please fill in all fields");
          products.push({
            title,
            category,
            price,
            img,
          });
          localStorage.setItem("products", JSON.stringify(products));
          displayProducts(products);
        } catch (err) {
          alert(err);
        }
      }
      

// DELETE
function deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts(products);
  }
}



// UPDATE
function updateProduct(position){
    let img = document.querySelector(`#imgEdit${position}`).value;
    let title = document.querySelector(`#titleEdit${position}`).value;
    let category = document.querySelector(`#categoryEdit${position}`).value;
    let price = document.querySelector(`#priceEdit${position}`).value;
    try {
          if (!title || !price || !img) throw new Error("Please fill in all fields");
          products[position] = {
            title,
            category,
            price,
            img,
          };
          localStorage.setItem("products", JSON.stringify(products));
          displayProducts(products);
        } catch (err) {
          alert(err);
        }
      }


function addToCart(position){
    let qty = document.querySelector(`#quantity${position}`).value;
    let added = false;

    cart.forEach((product) => {
        if(product.title == products[position].title){
            alert(`You have added ${qty}  ${products[position].title} to the cart`);
            product.qty = parseInt(product.qty) + parseInt(qty);
            added = true;
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    });
    if(!added){
        alert(`You have added ${qty}  ${products[position].title} to the cart`);
        cart.push({ ...products[position], qty});
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart))
    }
   showcart(cart);
}

function categorySort(){
    let category = document.querySelector("#categorySort").value;

    if(category == "All"){
        displayProducts(products);
        return;
    }

    let fltrdCat = products.filter((product => {
        return product.category == category;
    }));

    displayProducts(fltrdCat);
}

function priceSort() {
    let direction = document.querySelector("#priceSort").value;
  
    let sortedProducts = products.sort((a, b) => a.price - b.price);
  
    console.log(sortedProducts);
  
    if (direction == "Descending") sortedProducts.reverse();
    displayProducts(sortedProducts);
  }

  function sortName() {
    let direction = document.querySelector("#sortName").value;
  
    let sortedProducts = products.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    if (direction == "Descending") sortedProducts.reverse();
    console.log(sortedProducts);
    displayProducts(products);
  }