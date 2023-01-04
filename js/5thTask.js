function stringPrinter(inputString) {
    let tempString = inputString.trim();
    if (tempString.length > 10) { return (tempString.slice(0, 10) + "...") }
    else { return tempString }
}

console.log(stringPrinter(prompt(`Please enter your data`)))