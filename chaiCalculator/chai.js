function calculateChaiPrice(numberOfCups) {
      // Ingredients amount per cup of chai
      const water = 200;
       //ml
       const milk = 50;
         //ml
         const tealeaves = 1;
            //teaspoon
            const sugar = 2;
        //teaspoon

// Total ingredients of 3 cups of chai
    const totalWater = numberOfCups * waterPerCup;
    const totalMilk = numberOfCups * milkPerCup;
    const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
    const totalSugar = numberOfCups * sugarPerCup;

    // Prompt user for input
const input = prompt("Unataka chai ngapi? (Cups):");
const numberOfCups = Number(input);


    // Output
  console.log(`To make ${numberOfCups} cup${numberOfCups > 1 ? 's' : ''} of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${totalTeaLeaves > 1 ? 's' : ''}`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}`);
  console.log(`Enjoy your Chai Bora!`);


}


   

