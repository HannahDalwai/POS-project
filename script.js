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






function displayProduct(products){
    document.getElementById("products").innerHTML = "";

    products.forEach((product, position) => {
        document.getElementById("products").innerHTML += `
        <div class="card d-inline-flex p-2 bd-highlight shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img src="${product.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${product.title}</h4>
                <h6>R ${product.price}</h6>
                <button class="btn btn-secondary" data-bs-toggle="modal"  data-bs-toggle="modal" data-bs-target="#Modal${position}" style"margin-left: 80px;"><i class='bx bxs-pencil'></i></button>
                <button class="btn btn-danger" onclick="deleteProduct(${position})">Delete</button>
            </div>
        </div>
           


<div class="modal fade" id="Modal${position}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="Modal${position}"">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body"> 

    <input class="form-control w-50 mb-2" type="text" placeholder="Image URL">
        <input class="form-control w-50 mb-2" type="text" type="text" placeholder="Title">
        <input class="form-control w-50 mb-2" type="text"type="text" placeholder="Category">
        <input class="form-control w-50 mb-2" type="text" type="text" placeholder="Price">
  

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button  onclick=" createProduct"type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
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
            name:img,
            title,
            category,
            price
         });

        displayProduct(products);
    } catch (error) {
        alert(error)
    }
}

function deleteProduct(position){
    products.splice(position, 1);

    displayProduct(products);
}

function updateProduct(position){
    let product = document.querySelector(`#update-input-${position}`).value;
    let category = document.querySelector(`#update-category-${position}`).value;

    try {
        if(!product)throw new Error("Please add product when you update")
        products[position] = {
            name:img,
            title,
            category,
            price
         };
        displayProduct(products);
    } catch (error) {
        alert(error)
    }
}