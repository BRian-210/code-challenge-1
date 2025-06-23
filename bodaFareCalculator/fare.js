function calculateBodaFare (distanceInKm) {
    // Fare details
    const baseFare = 50;
    //kes
    const chargePerKm = 15;
    //kes

    // Fare Calculation
    const totalFare = baseFare + distanceCharge;
    const distanceCharge = distanceInKm * chargePerKm;

    // Prompts user for distance
    const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    const distanceInKm = Number(input);


     // Output
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log("Panda Pikipiki!");

}
// Call the function
calculateBodaFare();