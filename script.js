let list = document.querySelectorAll('.list'); // Corrigido seletor para classe
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length; // Conta quantos itens temos
let active = 0;

// Garante que o primeiro item tenha a classe 'active' inicialmente
if (list.length > 0) {
    list[0].classList.add('active');
}

next.onclick = () => {
    let activeOld = document.querySelector('.active');
    if (activeOld) {
        activeOld.classList.remove('active');
    }
    active = active >= count - 1 ? 0 : active + 1;
    list[active].classList.add('active');
    console.log("clicou next");
};

prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    if (activeOld) {
        activeOld.classList.remove('active');
    }
    active = active <= 0 ? count - 1 : active - 1; 
    list[active].classList.add('active');
    console.log("clicou prev");
};
