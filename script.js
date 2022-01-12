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



document.getElementById("navbar").innerHTML += `

<nav class="navbar navbar-light bg-light">
<div class="container-fluid">
  <aclass="navbar-brand">Stationary</aclass=>
    <button  id="" class="btn btn-outline-success" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
</div>
</nav>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"> 

      <input class="form-control w-50 mb-2" type="text">
      <input class="form-control w-50 mb-2" type="text" type="text">
      <input class="form-control w-50 mb-2" type="text"type="text">
      <input class="form-control w-50 mb-2" type="text" type="text">

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`;



function displayProduct(products){
    document.getElementById("products").innerHTML = "";

    products.forEach((product, position) => {
        document.getElementById("products").innerHTML += `
        <div class="card d-inline-flex p-2 bd-highlight shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img src="${product.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${product.title}</h4>
                <h6>R ${product.price}</h6>
                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal${position}" style"margin-left: 80px;"><i class='bx bxs-pencil'></i></button>
                <button class="btn btn-danger" onclick="deleteTask(${position})">Delete</button>
            </div>
        </div>
                        
        
        `;
    });
}
displayProduct(products);

// CREATE
function createProduct(){

       let title = document.querySelector("#addTitle").value;
       let product = document.querySelector("#addProduct").value;
       let category = document.querySelector("#category").value;
       let price = document.querySelector("#addPrice").value;



    try {
        if(!product)throw new Error("Please add product")
        products.push({
            name:product,
            category
         });

         localStorage.setItem("products", JSON.stringify(products));
        displayProduct(products);
    } catch (error) {
        alert(error)
    }
}

function deleteProduct(position){
    products.splice(position, 1);

    localStorage.setItem("products", JSON.stringify(products));
    displayProduct(products);
}

function updateProduct(position){
    let product = document.querySelector(`#update-input-${position}`).value;
    let category = document.querySelector(`#update-category-${position}`).value;

    try {
        if(!product)throw new Error("Please add product when you update")
        products[position] = {
            name:product,
            category
         };
         localStorage.setItem("products", JSON.stringify(products));
        displayProduct(products);
    } catch (error) {
        alert(error)
    }
}