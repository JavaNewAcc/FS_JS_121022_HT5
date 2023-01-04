

function figureCreator(sideA, sideB) {
    if (sideA == sideB || sideB == null) {
        this.name = "square";
        this.sideA = sideA;
        this.sideB = sideA;
    }
    else {
        this.name = "rectangle";
        this.sideA = sideA;
        this.sideB = sideB;
    }
}

figureCreator.prototype.areaCalc=function(){
    return (this.sideA*this.sideB);
}

figureCreator.prototype.perimeterCalc=function(){
return (this.sideA*2+this.sideB*2);
}

figureCreator.prototype.diagonalCalc=function(){
    return (Math.sqrt(Math.pow(this.sideA,2)+Math.pow(this.sideB,2)));
}

let rectangle = new figureCreator(10, 15);
let square = new figureCreator(15);

console.log(`We have figure ${rectangle.name} with sides ${rectangle.sideA} cm and ${rectangle.sideB} cm. Area of this figure is ${rectangle.areaCalc()} sq.cm, perimeter of this figure is ${rectangle.perimeterCalc()} cm and diagonal is ${rectangle.diagonalCalc()} cm`);

console.log(`We have figure ${square.name} with sides ${square.sideA} cm and ${square.sideB} cm. Area of this figure is ${square.areaCalc()} sq.cm, perimeter of this figure is ${square.perimeterCalc()} cm and diagonal is ${square.diagonalCalc()} cm`);