try {
    let result = 10/0;
    console.log(result);
    throw new Error("Something went wrong");

} catch (error) {
    console.log("Error occcured: ",error);
}

console.log("Program continues after the try-catch block");