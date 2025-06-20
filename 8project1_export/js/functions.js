/* define your functions here */
function calculateTotal(quantity, price){
    return quantity * price;
}

function outputCartRow(item, total) {

    // used chat for guidance here
  document.write("<tr>");
  document.write("<td><img src='" + item.image + "' alt='" + item.name + "'></td>");
  document.write("<td>" + item.name + "</td>");
  document.write("<td>" + item.quantity + "</td>");
  document.write("<td>$" + item.price.toFixed(2) + "</td>");
  document.write("<td>$" + total.toFixed(2) + "</td>");
  document.write("</tr>");

}






        
