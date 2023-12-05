const form = document.querySelector('#poke-busca-campo > form')
const namePoke = document.querySelector('input')
const pokeSprit = document.querySelector('div#poke-dados-campo-classSprit')
const pokeClass = document.querySelector('div#poke-dados-campo-classType')

//Chamada do evento de Submit do botão pokebola de busca
form.addEventListener('submit', (event)=>{
    //Inibindo o botão de reiniciar a página
    event.preventDefault()

    //Captura do valor no input de texto
    const namePokeValue = namePoke.value

    //Verificação de tamanho mínimo no input de busca
    if (namePokeValue.length <= 0){
        alert('Você deve digitar o nome do pokemon ou ID!')
        return
    }

    //Chamando API com função assíncrona
    const buscaPoke = async (pokemon) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePoke.value.toLowerCase()}`)

        //Transformando resposta da API em arquivo JSON
        const data = await response.json();
        
        //Definição dos atributos e valores principais
        const dataBase = {
            nome: data.name,
            id: data.id,
            tipo: data.types
        }
        
        const colors = {
            fire: '#f36c6c',
            grass: '#98d7a5',
            electric: '#ffe24f',
            water: '#7fcaec',
            ground: '#ee9c4a',
            rock: '#a0a0a0',
            fairy: '#ffcdf8',
            poison: '#b97fc9',
            bug: '#729f3f',
            dragon: '#f16e57',
            psychic: '#9f82ff',
            flying: '#afedff',
            normal: '#a4acaf',
            fighting: '#d56723',
            ice: '#85c1d3'
        }

        //Criando imagem do Pokemon dinâmicamente
        pokeSprit.textContent = ''

        const pokeImg = document.createElement('img')
        pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dataBase.id}.png`
        pokeImg.alt = 'Foto pokemon'
        pokeSprit.appendChild(pokeImg)

        //Atribuindo Nome e ID do Pokemon dinâmicamente
        const pokeIDName = document.createElement('p')
        pokeIDName.textContent = `#${dataBase.id} ${dataBase.nome}`
        pokeSprit.appendChild(pokeIDName)

        //Atribuindo Tipo dinamicamente
        //Verificando quantos tipos o pokemon tem
        if (dataBase.tipo.length > 1){
            pokeClass.innerHTML = ``
            for(let i = 0; i < dataBase.tipo.length; i++){
                const dataTypeName = `${dataBase.tipo[i]['type']['name']}`

                const pokeType = document.createElement('p')

                const searchColorType = colors[dataTypeName]

                pokeType.textContent = dataTypeName
                pokeClass.appendChild(pokeType)

                pokeType.style.backgroundColor = searchColorType

                // pokeClass.innerHTML += `<p>${dataBase.tipo[i]['type']['name']}</p>`
            }
        }else{
            pokeClass.textContent = ``
            const dataTypeName = `${dataBase.tipo.map(type => type.type.name)}`
            //ou
            //const dataTypeName = `${dataBase.tipo[0]['type']['name']}`

            const pokeType = document.createElement('p')

            const searchColorType = colors[dataTypeName]

            pokeType.textContent = dataTypeName
            pokeClass.appendChild(pokeType)

            pokeType.style.backgroundColor = searchColorType
            // pokeClass.innerHTML += `<p>${dataBase.tipo[0]['type']['name']}</p>`
        }

        
        // AQUI VAI O CÓDIGA DA MUDANÇA DE COR DINÂMICA DOS TIPOS
        // if(dataBase.tipo[0]['type']['name'] === 'electric'){
        //     const typeField = document.getElementById('poke-dados-campo-classType')
        
        // }

        //Limpando o input de texto com valores antigos
        namePoke.value = ''

        //Monstra no console valores resultado da busca da API 
        console.log(response)
    }

    //Chamada da função assíncrona
    buscaPoke()

})
