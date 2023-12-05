const asideInterface = document.getElementById('interface')

const skinPokeball = {
    pokeball: 'Pokebola.png',
    greatball: 'Greatball.png',
    ultraballball: 'Ultraball.png',
    masterball: 'Masterball.png'   
}

const interfacePokeball = document.querySelectorAll('#interface img')

const asideInterfaceClose = document.getElementById('escInterface')

asideInterface.addEventListener('mouseover', () => {
    asideInterface.style.animation = '1s linear 0s infinite alternate asideMoveShow'
})

asideInterface.addEventListener('mouseout', () => {
    asideInterface.style.animation = 'none'
})

//FUNÇÃO PARA ABRIR A GUIA DA INTERFACE
asideInterface.addEventListener('click', ()=> {

    asideInterface.addEventListener('mouseover', () => {
    asideInterface.style.animation = 'none'
    })

    asideInterface.style.borderRadius = '10px';
    asideInterface.style.padding = '50px 20px'
    asideInterface.style.height = '500px';
    asideInterface.style.width = '200px';
    asideInterface.style.flexDirection = 'column';
    asideInterface.style.justifyContent = 'space-between'
    asideInterface.style.alignItems = 'center';
    asideInterface.style.animation = 'none'

    


    asideInterface.innerHTML = ''
    for(let i = 0; i < 3; i++){
        // Criando os elementos HTML
        const section = document.createElement('section');
        const div = document.createElement('div');
        const spanStar = document.createElement('span');
        const spanChangeCircle = document.createElement('span');
        const img = document.createElement('img');
        img.classList.add('pokeballInterface')
        

        // Adicionando classes e atributos conforme necessário
        spanStar.classList.add('material-symbols-outlined');
        spanChangeCircle.classList.add('material-symbols-outlined');

        spanStar.textContent = 'star';
        spanChangeCircle.textContent = 'change_circle';

        img.src = `styles/media/${skinPokeball.pokeball}`;
        img.alt = 'Favorits Slot';

        // Estruturando os elementos
        div.appendChild(spanStar);
        div.appendChild(spanChangeCircle);

        section.appendChild(div);
        section.appendChild(img);

        // Adicionando a seção ao elemento asideInterface
        asideInterface.appendChild(section);

        section.addEventListener('click', () => {
            img.style.backgroundColor = 'tomato'
        })
    }

    asideInterfaceClose.style.display = 'block'

    asideInterface.style.transition = '.5s';

})

//FUNÇÃO PARA FECHAR A GUIA DA INTERFACE
asideInterfaceClose.addEventListener('click', () => {

    asideInterface.addEventListener('mouseover', () => {
    asideInterface.style.animation = '1s linear 0s infinite alternate asideMoveShow'
    })

    asideInterfaceClose.style.display = 'none'

    asideInterface.style.borderRadius = '50%';
    asideInterface.style.padding = '0px'
    asideInterface.style.height = '70px';
    asideInterface.style.width = '70px';
    asideInterface.style.flexDirection = '';
    asideInterface.style.justifyContent = 'center'
    asideInterface.style.alignItems = 'center'

    asideInterface.textContent = ''

    const span = document.createElement('span')
    span.textContent = 'menu'
    span.classList.add('material-symbols-outlined')
    asideInterface.appendChild(span)

    asideInterface.style.transition = '.5s';
})

//FUNÇÃO DENTRO DA GUIA DA INTERFACE
