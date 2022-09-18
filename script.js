//Grab button from HTML by class
var removeCart = document.getElementsByClassName('danger-class')
var aler = document.getElementById('btn-header')
// Loop through items 

for(var i = 0; i < removeCart.length; i++) {
    var button = removeCart[i] 
    button.addEventListener('click', function(event) {

        //Remove item from Cart with p/E

        var eventClicked = event.target
        eventClicked.parentElement.parentElement.remove()
        updateCart()
       
    })
}
//Update cart Total(go through row find price and multiply by quantity and display total)
function updateCart(){

    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItems = document.getElementsByClassName('cart-row')
    for(var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value 
        console.log(quantity * price)
    }
}


function alr(){
    alert("No Dvd Yet")
}

