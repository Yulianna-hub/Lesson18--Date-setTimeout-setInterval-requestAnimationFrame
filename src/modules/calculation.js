const calculation = (price = 100) => {
    const calcBlock = document. querySelector('.calc-block');
    const calcItems = document.querySelectorAll('.calc-item');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcDay = document.querySelector('.calc-day');
    const calcCount = document.querySelector('.calc-count');
    const totalValue = document.querySelector('#total');

    const calcRes = () => {  
        let total = 0;
        let countValue = 1;
        let dayValue = 1; 
        calcItems.forEach((elem) =>elem.value.match(/^\d+$/gi, ''));
        const typeValue = calcType.options[calcType.selectedIndex].value;
        const squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value -1) / 10;
            console.log(calcCount.value);
        }
        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;    
        }else if (calcDay.value && calcDay < 10) {
           dayValue *= 1.5; 
        }
        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }
        totalValue.textContent = calcItems.value;
        totalValue.textContent = total;
    };
    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
       if (target.matches('select') || target.matches('input')) {
            calcRes();
        }
    });   
};
export default calculation;