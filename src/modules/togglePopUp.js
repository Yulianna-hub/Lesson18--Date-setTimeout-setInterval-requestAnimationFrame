const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

//popUpAnimation
   let popUpAnimation = () => {
        const topPosition = (document.documentElement.clientHeight - popupContent.clientHeight) / 2;
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = (Date.now() - start);
            if (parseFloat(popupContent.style.top) >= topPosition) {
                clearInterval(timer);
            }
            muve(timePassed);
        }, 10);

        function muve(timePassed) {
            popupContent.style.top = timePassed / 5 + 'px';
        }
    };
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (screen.width  < 768) {
            popUp.style.display = 'block';
        }else {
            popUp.style.display = 'block';
            popUpAnimation();
        }
        });    
    });      
    popUp.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popUp.style.display = 'none';
            popupContent.style.top = '';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popUp.style.display = 'none';
                popupContent.style.top = '';
            }
        }
    });
};
export default togglePopUp;
