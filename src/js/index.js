/*
Quando clicar no pokemon da listagem, temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi clicado.

para isso vamos precisar trabalhar com dois elementos
1- Listagem
2- Cartão do pokemon

Precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

Vamos precisar trabalhar com o evento de clique feito pelo usuário na listagem de pokémons

- remover a classe aberta só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
- remover a classe ativo que marca o pokémon selecionado
- adicionar a classe ativo no item da lista selecionado

*/

// Precisamos criar duas variaveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
//Vamos precisar trabalhar com o evento de clique feito pelo usuário na listagem de pokémons
    pokemon.addEventListener('click', () =>{
        console.log(pokemon)
        //remover a classe aberta só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbir.classList.add('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})