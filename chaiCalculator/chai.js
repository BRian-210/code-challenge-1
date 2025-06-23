function calculateChaiPrice() {
  // Prompt user for number of cups
  const input = prompt("Unataka chai ngapi? (How many cups of chai?):");
  const numberOfCups = Number(input);

  // Ingredients amount per cup of chai
  const waterPerCup = 200;     // ml
  const milkPerCup = 50;       // ml
  const teaLeavesPerCup = 1;   // teaspoon
  const sugarPerCup = 2;       // teaspoon

  // Total ingredients
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  // Output
  console.log(`To make ${numberOfCups} cup${numberOfCups > 1 ? 's' : ''} of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} teaspoon${totalTeaLeaves > 1 ? 's' : ''}`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}`);
  console.log("Enjoy your Chai Bora!");
}

// Call the function
calculateChaiPrice();


