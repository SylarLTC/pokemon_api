const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

const divContainer = document.querySelector('.container')
const app = document.createElement('div')
app.id = 'app'
divContainer.appendChild(app)

const loading = document.createElement('div')
const loadingBall = document.createElement('div')
const loadingText = document.createElement('p')
loading.classList.add('spinner')
loadingBall.classList.add('ball')
loading.appendChild(loadingBall)
loadingText.innerText = 'Loading'
loadingText.classList.add('loading-text')
loading.appendChild(loadingText)
let currentPokemon = 100

async function getPokemon() {
    const response = await fetch(`${baseURL}${currentPokemon}`)
    const result = response.json()
    return result
}

async function getPokemonLeft() {
    const response = await fetch(`${baseURL}${currentPokemon-1}`)
    const result = response.json()
    return result
}

async function getPokemonRight() {
    const response = await fetch(`${baseURL}${currentPokemon+1}`)
    const result = response.json()
    return result
}

console.log(getPokemon())
console.log(getPokemonLeft())
console.log(getPokemonRight())

function createPokemon(pokemon) {
    const pokemonElement = document.createElement('div')
    pokemonElement.id = 'pokemonContainer'
    pokemonElement.classList.add('pokemon-container')
    
    const pokemonImage = document.createElement('img')
    pokemonImage.classList.add('pokemon-image')
    pokemonImage.src = 
        pokemon.sprites.other?.dream_world?.front_default ||
        pokemon.sprites.other?.['official-artwork']?.front_default ||
        pokemon.sprites.front_default
    pokemonElement.appendChild(pokemonImage)

    pokemonElement.appendChild(document.createElement('br'))
    pokemonElement.appendChild(document.createElement('br'))

    const pokemonInfo = document.createElement('div')
    pokemonInfo.classList.add('pokemon-info')
    pokemonElement.appendChild(pokemonInfo)

    const pokemonName = document.createElement('p')
    pokemonName.innerText = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`
    pokemonInfo.appendChild(pokemonName)

    pokemonInfo.appendChild(document.createElement('br'))

    const pokemonAbilities = document.createElement('div')
    pokemonAbilities.innerHTML = `
        <p class="ability-header">${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}'s Abilities:</p>
        `
    pokemon.abilities.forEach((item) => {
        const pokemonAbility = document.createElement('p')
        pokemonAbility.classList.add('ability-descr')
        pokemonAbility.innerText = item.ability.name[0].toUpperCase() + item.ability.name.slice(1)
        pokemonAbilities.appendChild(pokemonAbility)
    })
    pokemonInfo.appendChild(pokemonAbilities)

    pokemonInfo.appendChild(document.createElement('br'))

    const pokemonTypes = document.createElement('div')
    pokemonTypes.innerHTML = `
        <p class="types-header">${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}'s Types:</p>
        `
    pokemon.types.forEach((item) => {
        const pokemonType = document.createElement('p')
        pokemonType.classList.add('type-descr')
        pokemonType.innerText = item.type.name[0].toUpperCase() + item.type.name.slice(1)
        pokemonTypes.appendChild(pokemonType)
    })
    pokemonInfo.appendChild(pokemonTypes)

    pokemonElement.appendChild(createButtons())

    return pokemonElement
}

function createPokemonLeft(pokemon) {
    const pokemonElement = document.createElement('div')
    pokemonElement.id = 'pokemonContainerLeft'
    pokemonElement.classList.add('pokemon-container-left')
    
    const pokemonImage = document.createElement('img')
    pokemonImage.classList.add('pokemon-image-left')
    pokemonImage.src = 
        pokemon.sprites.other?.dream_world?.front_default ||
        pokemon.sprites.other?.['official-artwork']?.front_default ||
        pokemon.sprites.front_default
    pokemonElement.appendChild(pokemonImage)

    pokemonElement.appendChild(document.createElement('br'))
    pokemonElement.appendChild(document.createElement('br'))

    const pokemonInfo = document.createElement('div')
    pokemonInfo.classList.add('pokemon-info-left')
    pokemonElement.appendChild(pokemonInfo)

    const pokemonName = document.createElement('p')
    pokemonName.innerText = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`
    pokemonInfo.appendChild(pokemonName)

    pokemonInfo.appendChild(document.createElement('br'))

    const pokemonAbilities = document.createElement('div')
    pokemonAbilities.innerHTML = `
        <p class="ability-header">${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}'s Abilities:</p>
        `
    pokemon.abilities.forEach((item) => {
        const pokemonAbility = document.createElement('p')
        pokemonAbility.classList.add('ability-descr-left')
        pokemonAbility.innerText = item.ability.name[0].toUpperCase() + item.ability.name.slice(1)
        pokemonAbilities.appendChild(pokemonAbility)
    })
    pokemonInfo.appendChild(pokemonAbilities)

    pokemonInfo.appendChild(document.createElement('br'))

    const pokemonTypes = document.createElement('div')
    pokemonTypes.innerHTML = `
        <p class="types-header">${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}'s Types:</p>
        `
    pokemon.types.forEach((item) => {
        const pokemonType = document.createElement('p')
        pokemonType.classList.add('type-descr-left')
        pokemonType.innerText = item.type.name[0].toUpperCase() + item.type.name.slice(1)
        pokemonTypes.appendChild(pokemonType)
    })
    pokemonInfo.appendChild(pokemonTypes)

    return pokemonElement
}

function createPokemonRight(pokemon) {
    const pokemonElement = document.createElement('div')
    pokemonElement.id = 'pokemonContainerRight'
    pokemonElement.classList.add('pokemon-container-right')
    
    const pokemonImage = document.createElement('img')
    pokemonImage.classList.add('pokemon-image-right')
    pokemonImage.src = 
        pokemon.sprites.other?.dream_world?.front_default ||
        pokemon.sprites.other?.['official-artwork']?.front_default ||
        pokemon.sprites.front_default
    pokemonElement.appendChild(pokemonImage)

    pokemonElement.appendChild(document.createElement('br'))
    pokemonElement.appendChild(document.createElement('br'))

    const pokemonInfo = document.createElement('div')
    pokemonInfo.classList.add('pokemon-info-right')
    pokemonElement.appendChild(pokemonInfo)

    const pokemonName = document.createElement('p')
    pokemonName.innerText = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`
    pokemonInfo.appendChild(pokemonName)

    pokemonInfo.appendChild(document.createElement('br'))

    const pokemonAbilities = document.createElement('div')
    pokemonAbilities.innerHTML = `
        <p class="ability-header">${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}'s Abilities:</p>
        `
    pokemon.abilities.forEach((item) => {
        const pokemonAbility = document.createElement('p')
        pokemonAbility.classList.add('ability-descr-right')
        pokemonAbility.innerText = item.ability.name[0].toUpperCase() + item.ability.name.slice(1)
        pokemonAbilities.appendChild(pokemonAbility)
    })
    pokemonInfo.appendChild(pokemonAbilities)

    pokemonInfo.appendChild(document.createElement('br'))

    const pokemonTypes = document.createElement('div')
    pokemonTypes.innerHTML = `
        <p class="types-header">${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}'s Types:</p>
        `
    pokemon.types.forEach((item) => {
        const pokemonType = document.createElement('p')
        pokemonType.classList.add('type-descr-right')
        pokemonType.innerText = item.type.name[0].toUpperCase() + item.type.name.slice(1)
        pokemonTypes.appendChild(pokemonType)
    })
    pokemonInfo.appendChild(pokemonTypes)

    return pokemonElement
}

function createButtons() {
    const buttonContainer = document.createElement('div')

    const prevButton = document.createElement('button')
    prevButton.innerText = 'Previous Pokemon'
    buttonContainer.appendChild(prevButton)

    const nextButton = document.createElement('button')
    nextButton.innerText = 'Next Pokemon'
    buttonContainer.appendChild(nextButton)

    prevButton.addEventListener('click', goPrev)
    nextButton.addEventListener('click', goNext)
    
    return buttonContainer
}

function goPrev() {
    currentPokemon -= 1
    if (currentPokemon < 1) return currentPokemon = 899
    loadAndRenderPokemon()
}

function goNext() {
    currentPokemon += 1
    if (currentPokemon > 898) return currentPokemon = 0
    loadAndRenderPokemon()
}

async function loadAndRenderPokemon() {
    const pokemonElement = document.getElementById('pokemonContainer')
    const pokemonElementLeft = document.getElementById('pokemonContainerLeft')
    const pokemonElementRight = document.getElementById('pokemonContainerRight')
    pokemonElement.remove()
    pokemonElementLeft.remove()
    pokemonElementRight.remove()
    app.appendChild(loading)
    const pokemonLeft = await getPokemonLeft()
    const pokemon = await getPokemon()
    const pokemonRight = await getPokemonRight()
    loading.remove()
    console.log(pokemonLeft)
    console.log(pokemon)
    console.log(pokemonRight)
    app.appendChild(createPokemonLeft(pokemonLeft))
    app.appendChild(createPokemon(pokemon))
    app.appendChild(createPokemonRight(pokemonRight))
    animationContainer()
}

async function init() {
    app.appendChild(loading)
    const pokemon = await getPokemon()
    const pokemonLeft = await getPokemonLeft()
    const pokemonRight = await getPokemonRight()
    loading.remove()
    app.appendChild(createPokemonLeft(pokemonLeft))
    app.appendChild(createPokemon(pokemon))
    app.appendChild(createPokemonRight(pokemonRight))
}
init()

async function animationContainer() {
    await getPokemon()
    const pokemonElementAnimation = document.querySelector('.pokemon-container')
    const imageAnimation = document.querySelector('.pokemon-image')
    pokemonElementAnimation.addEventListener('mouseenter', (e) => {
        imageAnimation.style.transition = 'all 0.5s ease'
        imageAnimation.style.transform = 'rotate(-45deg) translateX(0)'
    })
    pokemonElementAnimation.addEventListener('mouseleave', (e) => {
        imageAnimation.style.transition = 'all 0.5s ease'
        imageAnimation.style.transform = 'rotate(0deg) translateX(-50%)'
    })
}
animationContainer()
