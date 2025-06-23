function estimateTransactionFee(amountToSend) {
  // Fee structure
  const minFee = 10;
  const maxFee = 70;
  const percentage = 0.015; // 1.5%

  // Calculate fee
  let calculatedFee = amountToSend * percentage;

  // Apply limits
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  } else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  // Total to be debited
  const totalDebited = amountToSend + calculatedFee;

  // Output
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}\n`);
  console.log("Send Money Securely!");
}

// Prompt user for input
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input);

// Validate input
if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Tafadhali weka kiasi halali cha kutuma (KES).");
}
