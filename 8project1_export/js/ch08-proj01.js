
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