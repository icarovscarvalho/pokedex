import {buscaPoke, favoritPokemonsArr} from './index.js'

//====>====>====>====>====>====>====>====>====>
const interfaceGroup = document.getElementById('interfaceGroup')
const btnOpenClose = document.getElementById('btnOpenClose')
const interfaceAside = document.getElementById('interface')

const skinPokeball = {
    pkball: 'Pokebola.png',
    gtball: 'Greatball.png',
    utball: 'Ultraball.png',
    mtball: 'Masterball.png',  
}

//====>====>====>====>====>====>====>====>====>
//MOVIMENTAÇÃO DO BOTÃO DE INTERFACE (HABILTAR/DESABILITAR)
function mouseOver() {
    btnOpenClose.addEventListener('mouseover', () => {
        btnOpenClose.style.animation = '1s linear 0s infinite alternate asideMoveShow'
    })
}
mouseOver()

function mouseOut() {
    btnOpenClose.addEventListener('mouseout', () => {
        btnOpenClose.style.animation = 'none'
    })
}
mouseOut()

//====>====>====>====>====>====>====>====>====>
//FUNÇÃO DE CRIAÇÃO DA INTERFACE
function interfaceOpenClose() {
    if(blockVerifyInstructions == 'close'){
        blockVerifyInstructions = 'open'
        console.log(blockVerifyInstructions)
        //#PARAR o Hover nos asides após ABRIR a barra de aside

        btnOpenClose.textContent = 'x'
        // btnOpenClose.classList.remove('btnOpenClose')
        // interfaceGroup.classList.add('interfaceGroupOpen')
        // interface.classList.add('interfaceOpen')
        interfaceAside.style.display = 'block'

        // btnOpenClose.addEventListener('mouseover', ()=>{
        //     interface.style.animation = 'none'
        // })

        btnOpenClose.style.width = '25px'
        btnOpenClose.style.height = '25px'
        btnOpenClose.style.background = 'none'
        btnOpenClose.style.backgroundColor = '#ee3434'
        btnOpenClose.style.color = '#ffffff'
        btnOpenClose.style.margin = '-35px 0px 10px 0px'

        interfaceGroup.style.display = 'flex'
        interfaceGroup.style.flexDirection = 'column'
        interfaceGroup.style.alignItems = 'flex-end'
        interfaceGroup.style.justifyContent = 'center'

        

        interfaceAside.style.borderRadius = '10px';
        interfaceAside.style.padding = '0px 20px'
        interfaceAside.style.height = '500px';
        interfaceAside.style.width = '200px';
        interfaceAside.style.flexDirection = 'column';
        interfaceAside.style.justifyContent = 'space-between'
        interfaceAside.style.alignItems = 'center'
        interfaceAside.style.animation = 'none' 

        interfaceAside.style.transition = '.5s ease-in-out .5s';

    }else{
        interfaceGroup
        blockVerifyInstructions = 'close'
        console.log(blockVerifyInstructions)

        //#VOLTAR o Hover nos asides após FECHAR a barra de aside
        btnOpenClose.addEventListener('mouseover', ()=>{
            btnOpenClose.style.animation = '1s linear 0s infinite alternate asideMoveShow'
        })

        interfaceAside.style.display = 'none'
        btnOpenClose.classList.remove('btnOpenInterface')

        btnOpenClose.style.borderRadius = '50%';
        btnOpenClose.style.padding = '0px'
        btnOpenClose.style.height = '70px';
        btnOpenClose.style.width = '70px';
        btnOpenClose.style.flexDirection = '';
        btnOpenClose.style.justifyContent = 'center'
        btnOpenClose.style.alignItems = 'center'
        btnOpenClose.style.backgroundColor = '#fff'
        btnOpenClose.style.color = '#000'
        
        btnOpenClose.textContent = ''
        
        const span = document.createElement('span')
        span.textContent = 'menu'
        span.classList.add('material-symbols-outlined')
        btnOpenClose.appendChild(span)
    
        interfaceAside.style.transition = '.5s';
    }
}

//CHAMADA DA FUNÇÃO DE ABRE E FECHA INTERFACE
btnOpenClose.addEventListener('click', () => {
    interfaceOpenClose()
})
//====>====>====>====>====>====>====>====>====>
//FUNÃO DE CRIAÇÃO DAS POKEBOLAS
const createPokeballs= (storage) => {
    
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

    function setInitialStarTextContent() {
        const storedStarText = localStorage.getItem(`starTextContent${storage}`);
        if (storedStarText) {
            spanStar.textContent = storedStarText;
        }
    }

    const [textBase1, textBase2, textBase3] = [setInitialStarTextContent('1'),setInitialStarTextContent('2'),setInitialStarTextContent('3')]
    
    // Chame a função para definir o textContent do spanStar para cada slotBase

    spanChangeCircle.textContent = 'change_circle';

    img.src = `styles/media/${skinPokeball.pkball}`;
    img.alt = 'Favorits Slot';

    // Estruturando os elementos
    div.appendChild(spanStar);
    div.appendChild(spanChangeCircle);

    section.appendChild(div);
    section.appendChild(img);

    // Adicionando a seção ao elemento asideInterface
    interfaceAside.appendChild(section);

    //=>=>=>=>=>==>===>====>=====>======>========>==========>====>
    //INTERAÇÃO COM A POKEBOLA - FAVORITAR
    img.onclick = clickPokeballInsiderInterface
    function clickPokeballInsiderInterface(){
        console.log('gotcha')
        
        img.classList.add('rotatePokeball')
        //FAVORITAR STAR
        spanStar.classList.add('getFavoritePkmon')
        spanStar.textContent = 'star_half'

        localStorage.setItem(`starTextContent${storage}`, spanStar.textContent);
 
        setTimeout(() => {
            img.classList.remove('rotatePokeball')
        },600); 

        localStorage.setItem(`pokemon${storage}`, favoritPokemonsArr)
    }
    //=>=>=>=>=>==>===>====>=====>======>========>==========>====>
    //STAR - FUNÇÃO PESQUISAR FAVORITO
    spanStar.onclick = showFavoritePokemon
    function showFavoritePokemon() {
        const storedPokemons = localStorage.getItem(`pokemon${storage}`);
        buscaPoke(storedPokemons);
    }
    //=>=>=>=>=>==>===>====>=====>======>========>==========>====>
    //MUDAR SKIN DA POKEBOLA
    const skins = [skinPokeball.pkball, skinPokeball.gtball, skinPokeball.utball ,skinPokeball.mtball]

    spanChangeCircle.style.cursor = 'pointer'
    spanChangeCircle.onclick = changePokeball

    let index = 0

    function changePokeball() {
        // const masterball = img.src = `styles/media/${skins[2]}`
        index = (index + 1) % skins.length;
        console.log(index)
        img.src = `styles/media/${skins[index]}`
    }
    
}
//====>====>====>====>====>====>====>====>====>
const [slotBase1, slotBase2, slotBase3] = [createPokeballs('1'),createPokeballs('2'),createPokeballs('3')]
//====>====>====>====>====>====>====>====>====>