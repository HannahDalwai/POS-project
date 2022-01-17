let products = [

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
  function displayProducts(products){
    document.querySelector("#products").innerHTML = "";

    products.forEach((product, position) => {
        document.querySelector("#products").innerHTML += `
        <div class="card d-inline-flex p-2 bd-highlight" style="width: 18rem;">
        <img id="img" class="card-img-top" src="${product.img}" alt="Card image cap">
        <div class="card-body">
            <h3 id="title" class="card-title">${product.title}</h3>
            <h5 id="category" class="card-title">${product.category}</h5>
            <p id="price" class="card-text">R${product.price}</p>
            <div>
                Quantity:
                <input type="number" name="Quantity" class="form-control mb-2" id="quantity${position}" min="1" value="1">
            <div/>
            <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal${position}">Edit</button>
            <button class="btn btn-danger" onclick="deleteProduct(${position})">Delete</button>
            <button class="btn btn-success mt-1" onclick="addToCart(${position})">Add to cart</button>
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

function createProduct(){
    let img = document.querySelector("#img").value;
    let title = document.querySelector("#title").value;
    let category = document.querySelector("#category").value;
    let price = document.querySelector("#price").value;

    products.push({
        title: title,
        category,
        price,
        img
    })
    localStorage.setItem("products", JSON.stringify(products))
    displayProducts(products);
}

function deleteProduct(position){
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products))
    displayProducts(products);
}

function updateProduct(position){
    let img = document.querySelector(`#imgEdit${position}`).value;
    let title = document.querySelector(`#titleEdit${position}`).value;
    let category = document.querySelector(`#categoryEdit${position}`).value;
    let price = document.querySelector(`#priceEdit${position}`).value;
        products[position] = {
            title: title,
            category,
            price,
            img
            };
        localStorage.setItem("products", JSON.stringify(products))
        displayProducts(products);
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






































// let products = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : 
// [
//     {
//         title: "Filla-Stack-2",
//         category: "Sneakers",
//         price: 400,
//         img: "https://i.postimg.cc/hvXRq4Nq/FILA-Stack-2.jpg"
//       },
//     {
//         title: "Timberland",
//         category: "Boots",
//         price: 800,
//         img: "https://i.postimg.cc/cJ3xPqnh/boots.jpg"
//       },
//     {
//         title: "Canvas",
//         category: "Casual",
//         price: 250,
//         img: "https://i.postimg.cc/FRbnM1Rp/casj.jpg"
//       },
//     {
//         title: "Havianas",
//         category: "Flip Flops",
//         price: 100,
//         img: "https://i.postimg.cc/BvkhLH8M/flip-flopss.jpg"
//       },
// ];
// let cart = JSON.parse(localStorage.getItem("cart"))
//   ? JSON.parse(localStorage.getItem("cart"))
//   : [];

// // READ
// function displayProducts(products) {
//   document.querySelector("#products").innerHTML = "";
//   products.forEach((product, position) => {
//     document.querySelector("#products").innerHTML += `
//       <div class="card">
//         <img src="${product.img}" class="card-img-top" alt="${product.title}">
//         <div class="card-body">
//           <h5 class="card-title">${product.title}</h5>
//           <p class="card-text">R${product.price}</p>
//           <div class="d-flex mb-3">
//             <input type="number" class="form-control" value=1 min=1 id="addToCart${position}">
//             <button type="button" class="btn btn-secondary ms-3" onclick="addToCart(${position})"><i class="fas fa-cart-plus"></i></button>
//           </div>
          
          
//           </div>
//           <div class="d-flex justify-content-end card-footer">
//             <button type="button" class="btn btn-primary w-50" data-bs-toggle="modal" data-bs-target="#Product${position}" >
              
//             </button>
//             <button type="button" class="btn btn-danger w-50 ms-3" onclick="deleteProduct(${position})" >
//               Delete
//             </button>
//           </div>
//       </div>
//       <div
//                 class="modal fade"
//                 id="Product${position}"
//                 tabposition="-1"
//                 aria-labelledby="exampleModalLabel"
//                 aria-hidden="true"
//               >
//                 <div class="modal-dialog">
//                   <div class="modal-content">
//                     <div class="modal-header">
//                       <h5 class="modal-title" id="exampleModalLabel">
//                          ${product.title}
//                       </h5>
//                       <button
//                         type="button"
//                         class="btn-close"
//                         data-bs-dismiss="modal"
//                         aria-label="Close"
//                       ></button>
//                     </div>
//                     <div class="modal-body">
//                       <div class="mb-3">
//                         <label for="Title${position}" class="form-label">Title</label>
//                         <input
//                           class="form-control"
//                           type="text"
//                           name="Title${position}"
//                           id="Title${position}"
//                           value="${product.title}"
//                         />
//                       </div>
//                       <div class="mb-3">
//                         <label for="Category${position}" class="form-label">Category</label>
//                         <select
//                           class="form-select"
//                           name="Category${position}"
//                           id="Category${position}"
//                         >
//                           <option value="Fruit">Fruit</option>
//                           <option value="Vegetables">Vegetables</option>
//                           <option value="Meat">Meat</option>
//                         </select>
//                       </div>
//                       <div class="mb-3">
//                         <label for="Price${position}" class="form-label">Price</label>
//                         <input
//                           class="form-control"
//                           type="text"
//                           name="Price${position}"
//                           id="Price${position}"
//                           value="${product.price}"
//                         />
//                       </div>
//                       <div class="mb-3">
//                         <label for="Img${position}" class="form-label">Image URL</label>
//                         <input
//                           class="form-control"
//                           type="text"
//                           name="Img${position}"
//                           id="Img${position}"
//                           value="${product.img}"
//                         />
//                       </div>
//                     </div>
//                     <div class="modal-footer">
//                       <button
//                         type="button"
//                         class="btn btn-secondary"
//                         data-bs-dismiss="modal"
// //                       >
// //                         Close
// //                       </button>
// //                       <button
// //                         type="button"
// //                         class="btn btn-primary"
// //                         data-bs-dismiss="modal"
// //                         onclick="updateProduct(${position})"
// //                       >
// //                         Save changes
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //     `;
//   });
// }

// displayProducts(products);
// showCartBadge();

// CREATE
// function createProduct() {
//   let title = document.querySelector("#addTitle").value;
//   let category = document.querySelector("#addCategory").value;
//   let price = document.querySelector("#addPrice").value;
//   let img = document.querySelector("#addImg").value;

//   try {
//     if (!title || !price || !img) throw new Error("Please fill in all fields");
//     products.push({
//       title,
//       category,
//       price,
//       img,
//     });
//     localStorage.setItem("products", JSON.stringify(products));
//     displayProducts(products);
//   } catch (err) {
//     alert(err);
//   }
// }

// UPDATE
// function updateProduct(position) {
//   let title = document.querySelector(`#Title${position}`).value;
//   let category = document.querySelector(`#Category${position}`).value;
//   let price = document.querySelector(`#Price${position}`).value;
//   let img = document.querySelector(`#IMG${position}`).value;

//   try {
//     if (!title || !price || !img) throw new Error("Please fill in all fields");
//     products[position] = {
//       title,
//       category,
//       price,
//       img,
//     };
//     localStorage.setItem("products", JSON.stringify(products));
//     displayProducts(products);
//   } catch (err) {
//     alert(err);
//   }
// }

// DELETE
// function deleteProduct(position) {
//   let confirmation = confirm(
//     "Are you sure you want to delete the selected product?"
//   );

//   if (confirmation) {
//     products.splice(position, 1);
//     localStorage.setItem("products", JSON.stringify(products));
//     displayProducts(products);
//   }
// }

// ADD TO CART
// function addToCart(position) {
//   let qty = document.querySelector(`#addToCart${position}`).value;
//   let added = false;
//   cart.forEach((product) => {
//     if (product.title == products[position].title) {
//       alert(
//         `You have successfully added ${qty} ${products[position].title} to the cart`
//       );
//       product.qty = parseInt(product.qty) + parseInt(qty);
//       added = true;
//     }
//   });
//   if (!added) {
//     cart.push({ ...products[position], qty });
//     alert(
//       `You have successfully added ${qty} ${products[position].title} to the cart`
//     );
//   }

//   showCartBadge();

//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// Update Cart Badge
// function showCartBadge() {
//   document.querySelector("#badge").innerHTML = cart ? cart.length : "";
// }

// SORT BY CATEGORY
// function sortCategory() {
//   let category = document.querySelector("#sortCategory").value;

//   if (category == "All") {
//     return displayProducts(products);
//   }

//   let foundProducts = products.filter((product) => {
//     return product.category == category;
//   });

//   displayProducts(foundProducts);
//   console.log(foundProducts);
// }

// SORT BY NAME

// function sortName() {
//   let direction = document.querySelector("#sortName").value;

//   let sortedProducts = products.sort((a, b) => {
//     if (a.title.toLowerCase() < b.title.toLowerCase()) {
//       return -1;
//     }
//     if (a.title.toLowerCase() > b.title.toLowerCase()) {
//       return 1;
//     }
//     return 0;
//   });
//   if (direction == "descending") sortedProducts.reverse();
//   console.log(sortedProducts);
//   displayProducts(products);
// }

// SORT BY PRICE

// function sortPrice() {
//   let direction = document.querySelector("#sortPrice").value;

//   let sortedProducts = products.sort((a, b) => a.price - b.price);

//   console.log(sortedProducts);

//   if (direction == "descending") sortedProducts.reverse();
//   displayProducts(sortedProducts);
// }

