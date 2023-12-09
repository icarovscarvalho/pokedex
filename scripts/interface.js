const interfaceGroup = document.getElementById('interfaceGroup')
const btnOpenClose = document.getElementById('btnOpenClose')
const interface = document.getElementById('interface')

const skinPokeball = {
    pkball: 'Pokebola.png',
    gtball: 'Greatball.png',
    utball: 'Ultraball.png',
    mtball: 'Masterball.png'   
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
        btnOpenClose.addEventListener('mouseover', ()=>{
            btnOpenClose.style.animation = 'none'
        })

        btnOpenClose.textContent = 'x'
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

        interface.style.display = 'block'

        interface.style.borderRadius = '10px';
        interface.style.padding = '0px 20px'
        interface.style.height = '500px';
        interface.style.width = '200px';
        interface.style.flexDirection = 'column';
        interface.style.justifyContent = 'space-between'
        interface.style.alignItems = 'center'
        interface.style.animation = 'none' 

        interface.style.transition = '.5s ease-in-out .5s';

    }else{
        blockVerifyInstructions = 'close'
        console.log(blockVerifyInstructions)

        //#VOLTAR o Hover nos asides após FECHAR a barra de aside
        btnOpenClose.addEventListener('mouseover', ()=>{
            btnOpenClose.style.animation = '1s linear 0s infinite alternate asideMoveShow'
        })

        interface.style.display = 'none'

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
    
        interface.style.transition = '.5s';
    }
}

//CHAMADA DA FUNÇÃO DE ABRE E FECHA INTERFACE
btnOpenClose.addEventListener('click', () => {
    interfaceOpenClose()
})
//====>====>====>====>====>====>====>====>====>
//FUNÃO DE CRIAÇÃO DAS POKEBOLAS
const createPokeballs= () => {
    
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

    img.src = `styles/media/${skinPokeball.pkball}`;
    img.alt = 'Favorits Slot';

    // Estruturando os elementos
    div.appendChild(spanStar);
    div.appendChild(spanChangeCircle);

    section.appendChild(div);
    section.appendChild(img);

    // Adicionando a seção ao elemento asideInterface
    interface.appendChild(section);

    //=>=>=>=>=>==>===>====>=====>======>========>==========>====>
    //INTERAÇÃO COM A POKEBOLA - FAVORITAR
    img.style.cursor = 'pointer'
    img.onclick = clickPokeballInsiderInterface
    function clickPokeballInsiderInterface(){
        console.log('gotcha')
        img.style.rotate = '720deg'
        img.style.transition = '.5s'
    }
    //=>=>=>=>=>==>===>====>=====>======>========>==========>====>
    //MUDAR SKIN DA POKEBOLA
    const skins = [skinPokeball.pkball, skinPokeball.gtball, skinPokeball.utball ,skinPokeball.mtball]

    spanChangeCircle.style.cursor = 'pointer'
    spanChangeCircle.onclick = changePokeball
    function changePokeball() {
        const masterball = img.src = `styles/media/${skins[2]}`
    }

    return section;
}

const [slotBase1, slotBase2, slotBase3] = [createPokeballs(),createPokeballs(),createPokeballs()]
//====>====>====>====>====>====>====>====>====>