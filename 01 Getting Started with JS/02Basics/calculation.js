// var num1 = 7;
// var num2 = 6;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// var answer = num1 > num2;
// console.log(answer);

// Calculate Discount for a particular course
//Formula to calculate Discount: Discount = (Listing_Price - Selling_Price)/Listing_Price * 100;

var sellingPrice = 199;
var listingPrice = 799;
var discountPercent = (listingPrice - sellingPrice)/ listingPrice * 100;

console.log("Discount Percentage is: "+ discountPercent);

displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage +"% off");

var result = listingPrice > sellingPrice;
console.log(result);
console.log(typeof result);