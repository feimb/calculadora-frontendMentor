class Calculator {
    constructor(operation) {
        this.operation = operation;
    }
    delete(){
        if (this.operation.textContent === "") {
            return;
        }
        if(this.operation.textContent.slice(-1) === " "){
            this.operation.textContent = this.operation.textContent.slice(0, -2);
            
        }
        this.operation.textContent = this.operation.textContent.slice(0, -1);
    }
    reset(){
        this.operation.textContent = '';
    }
    addNumber(number){
        if(this.operation.textContent === "" && number === "0"){
            return;
        }
        this.operation.textContent += number;
    }
    addOperator(operator){
        if (this.operation.textContent === "" || this.operation.textContent.slice(-1) === " ") {
            return;
        }
        // if (this.operation.textContent === "") {
        //     return;
        // }
        // if(operator.textContent.slice(-1) === " "){
        //     return;
        // }

        this.operation.textContent += " " + operator + " ";
    }
    eval(){
        try{
            const expression = this.operation.textContent.replace(/x/g, "*");

            if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
                throw new Error("Expresión inválida");
            }

            const result = new Function(`return (${expression})`)();


            this.operation.textContent = result;
        }catch(error){
            const operationSave = this.operation.textContent; 
            display.textContent = "Error"
            console.log("hola")
            setTimeout(() => {
                this.operation.textContent = operationSave; 
            }, 1000);

        }
    }
    point(){
        if(this.operation.textContent === ""){
            this.operation.textContent = "0.";
            return;
        }
        const lastNumber = this.operation.textContent.split(" ").slice(-1)[0];
        if(lastNumber.includes(".")){
            return;
        }
        this.operation.textContent += ".";
    }
}
const calculadora = new Calculator(display);

delBtn.addEventListener("click", () => {
    calculadora.delete();
});
resetBtn.addEventListener("click",() => {
    calculadora.reset();
})
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        calculadora.addNumber(btn.value);
    })
});
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        calculadora.addOperator(operator.value);
    })
});
point.addEventListener("click", () => {
    calculadora.point();
});

equal.addEventListener("click", () => {
    calculadora.eval();
    equal.disabled = true;
    setTimeout(() => {
        equal.disabled = false;
    }, 1100);
});