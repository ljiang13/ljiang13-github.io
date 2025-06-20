
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

   let subtotal = 0;

   for (let i = 0; i <cart.length; i++) {
      let item = cart [i];

      // used chatgpt to help with this part
      let total = calculateTotal(item.quantity, item.product.price);
      subtotal += total;

      outputCartRow(item, total);
   }

   //function updateTotals used with assistance with chatgpt
   function updateTotals() {
   let taxRate = parseFloat(document.getElementById("taxRate").value) / 100;
   let shippingThreshold = parseFloat(document.getElementById("shippingThreshold").value);

   let tax = subtotal * taxRate;
   let shipping = subtotal > shippingThreshold ? 0 : 40;
   let grandTotal = subtotal + tax + shipping;

   //results
   document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
   document.getElementById("taxAmount").textContent = "$" + tax.toFixed(2);
   document.getElementById("shipping").textContent = "$" + shipping.toFixed(2);
   document.getElementById("grandTotal").textContent = "$" + grandTotal.toFixed(2);
      
   }
   // used chat to help with different user input
   document.getElementById("taxRate").addEventListener("input", updateTotals);
   document.getElementById("shippingThreshold").addEventListener("input", updateTotals);

   updateTotals();


  
