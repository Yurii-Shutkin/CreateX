const btnSub = document.querySelector('.modal-button-sub');
const itemsSub = document.querySelectorAll('.hidden-item-sub');

const btnCv = document.querySelectorAll('.modal-button-cv');
const itemsCv = document.querySelectorAll('.hidden-item-cv');

const overlay = document.querySelector('.modal__overlay'); 
const modals = document.querySelectorAll('.hidden-item'); 
const modalClose = document.querySelectorAll('.modal__close'); 

let scrollY = 0;

const lockScroll = () => {
    scrollY = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
};

const unlockScroll = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    window.scrollTo(0, scrollY);
};

function openModal(elements) {
    elements.forEach(item => item.style.display = 'block');
    overlay.style.display = 'block'; 

    lockScroll();
}


function closeModal() {
    modals.forEach(item => item.style.display = 'none');
    overlay.style.display = 'none'; 

    unlockScroll();
}


btnSub.addEventListener('click', () => {
    openModal(itemsSub);
    console.log('Sub clicked');

    lockScroll();
});

btnCv.forEach(button => {
    button.addEventListener('click', () => {
        openModal(itemsCv);
        lockScroll();
        console.log('CV clicked');
    });
});

overlay.addEventListener('click', closeModal);
modalClose.forEach(closeBtn => {
    closeBtn.addEventListener('click', closeModal);
    unlockScroll();
});
