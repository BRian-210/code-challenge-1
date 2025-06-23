function calculateBodaFare(distanceInKm) {
    // Fare details
    const baseFare = 50;
    //kes
    const chargePerKm = 15;
    //kes

    // Fare Calculation
    const distanceCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceCharge;

  
    // Output
    console.log(`Your destination is ${distanceInKm} km away:`);
    console.log(`Base Fare: KES ${baseFare}`);
    console.log(`Distance Charge: KES ${distanceCharge}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Enjoy your ride!");
  console.log("Panda Pikipiki!");

}
// Prompt user for distance
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(input);

// Call the function
calculateBodaFare();