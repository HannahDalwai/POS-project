let cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];

function displaycart(cart){
    document.querySelector("#cart").innerHTML = "";

    cart.forEach((cart, position) => {
        document.querySelector("#cart").innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img id="img" src="${cart.img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title" id="title">${cart.title}</h5>
                    <p class="card-text" id="price">R${cart.price}</p>
                    <div>
                        <input type="number" name="Quantity" class="form-control mb-2" id="quantity${position}" min="1" value="${cart.qty}" onchange="updateCart(${position})">
                    <div/>
                    <p>Total = R${parseInt(cart.qty * cart.price)}</p>
                    <button class="btn btn-danger mt-2" onclick="deleteProduct(${position})">Remove</button>
                </div>
                </div>
            </div>
        </div>
        `;
    });

    document.querySelector("#cart").innerHTML += `
        <h2>Total is = R${calculateTotal()}</h2>
    `;
    
}

displaycart(cart);


function updateCart(position){
    let qty = document.querySelector(`#quantity${position}`).value;

    cart[position] = { ...cart[position], qty};
    localStorage.setItem("cart", JSON.stringify(cart));
    displaycart(cart);
}

function deleteProduct(position){
    cart.splice(position, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displaycart(cart);
}

function calculateTotal(){
    let total = 0;
    cart.forEach((product => {
        total = total + product.price * product.qty;
    }))
    return total;
}
// console.log(calculateTotal());