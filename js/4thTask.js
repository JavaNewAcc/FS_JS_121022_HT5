function CapitalizeR(userName) {
    return (userName.charAt(0).toUpperCase() + userName.slice(1, -1) + userName.charAt(userName.length - 1).toUpperCase());
}

console.log(CapitalizeR(prompt(`Введіть ім'я`)));