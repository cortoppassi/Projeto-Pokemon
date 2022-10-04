function buscarDados() {
    const codpokemon = getRndInteger(1, 500);
    fetch("https://pokeapi.co/api/v2/pokemon/"+codpokemon).then(async (response)=>{
        const dados = await response.json();
        const imagePkm = dados.sprites.back_default;
        const pokemon = document.createElement('img');
        pokemon.src = imagePkm;
        document.body.append(pokemon);
    })

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  