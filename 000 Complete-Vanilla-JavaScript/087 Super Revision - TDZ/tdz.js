function showTDZExample() {
  console.log("Starting TDZ Example");
  {
    // We are inside a new Block , TDZ starts here for x
    // Attempt to access x before it's declared:
    console.log("Accessing x before declaration:");
    try {
      console.log(x); //  This will throw ReferenceError
    } catch (err) {
      console.log("Error caught:", err.message); // Output: Cannot access 'x' before initialization
    }

    // Now we declare `x`, ending the TDZ
    let x = 42;

    // Accessing x after declaration
    console.log("Accessing x after declaration:");
    console.log(x); //  Output: 42
  }
}
showTDZExample();