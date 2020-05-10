const ourCommand = () => {
    const command = document.querySelector('#command');
    let temp;
    command.addEventListener('mouseover', event => {
        if (event.target.matches('img')) {
            temp = event.target.src;
            event.target.src = event.target.dataset.img;
        }
    });
    command.addEventListener('mouseout', event => {
        if (event.target.matches('img')) { 
            event.target.src = temp; 
        }
    });      
};
export default ourCommand;
