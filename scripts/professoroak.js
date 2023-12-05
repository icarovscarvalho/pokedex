const asideInstructions = document.getElementById('professor-Oak')

let blockVerifyInstructions = 'close'

asideInstructions.addEventListener('mouseover', ()=>{
        asideInstructions.style.animation = '1s linear 0s infinite alternate asideMoveShow'
    })

asideInstructions.addEventListener('mouseout', ()=>{
    asideInstructions.style.animation = 'none'
})

//#Definição do evento de clique
asideInstructions.addEventListener('click', (event)=>{

    if(blockVerifyInstructions == 'close'){
        blockVerifyInstructions = 'open'
        console.log(blockVerifyInstructions)
        //#PARAR o Hover nos asides após ABRIR a barra de aside
        asideInstructions.addEventListener('mouseover', ()=>{
            asideInstructions.style.animation = 'none'
        })

        asideInstructions.style.borderRadius = '10px';
        asideInstructions.style.padding = '0px 20px'
        asideInstructions.style.height = '500px';
        asideInstructions.style.width = '200px';
        asideInstructions.style.flexDirection = 'column';
        asideInstructions.style.justifyContent = 'space-between'
        asideInstructions.style.alignItems = 'center'
        asideInstructions.style.animation = 'none'

        asideInstructions.textContent = ''

        const title = document.createElement('h2')
        title.textContent = `Instructions ⚙️`
        asideInstructions.appendChild(title)

        const paragrafo = document.createElement('p')
        paragrafo.classList.add('instructions')
        paragrafo.textContent = `Hello son, I'm Professor Oak. If you want looking for some pokemon, you can write its name or ID on search bar and then click on the Pokeball next to it. Let's
        try. For example, type for Pikachu or just number 25.
        `
        asideInstructions.appendChild(paragrafo)

        const img = document.createElement('img')
        img.src = 'styles/media/professor-oak.png'
        img.alt = 'Instruções - Professor Oak'
        asideInstructions.appendChild(img)

    asideInstructions.style.transition = '.5s';

    }else{
        blockVerifyInstructions = 'close'
        console.log(blockVerifyInstructions)

        //#VOLTAR o Hover nos asides após FECHAR a barra de aside
        asideInstructions.addEventListener('mouseover', ()=>{
            asideInstructions.style.animation = '1s linear 0s infinite alternate asideMoveShow'
        })

    asideInstructions.style.borderRadius = '50%';
    asideInstructions.style.padding = '0px'
    asideInstructions.style.height = '70px';
    asideInstructions.style.width = '70px';
    asideInstructions.style.flexDirection = '';
    asideInstructions.style.justifyContent = 'center'
    asideInstructions.style.alignItems = 'center'
    
    asideInstructions.textContent = ''
    
    const span = document.createElement('span')
    span.textContent = 'book_3'
    span.classList.add('material-symbols-outlined')
    asideInstructions.appendChild(span)
    
    asideInstructions.style.transition = '.5s';
    }
})
