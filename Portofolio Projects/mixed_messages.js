// define my pokemons in my pokedex parts from future messages
const Pokemons = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    gender: ['Male ♂', 'Female ♀'],
    power: ['85-114', '115-129', '115-129', '130-144', '145-159'],
    type: ['Pikachu', 'Piblob', 'Vulpix', 'Scorbunny', 'Wartortle']
};

// store my pokemons in an array
let PokemonsIcatch = [];

let no_of_pokemons, gender, its_power, its_type;

// Iterate over the object and create a random message with the data from the object
for (let prop in Pokemons) {
    let randomIndex = Math.floor(Math.random() * Pokemons[prop].length);
    switch (prop) {
        case 'numbers':
            no_of_pokemons = Pokemons[prop][randomIndex];
            PokemonsIcatch.push(`I have ${no_of_pokemons} pokemon(s) cached.`);
            break;
        case 'gender':
            gender = Pokemons[prop][randomIndex];
            PokemonsIcatch.push(`They are all ${gender}.`);
            break;
        case 'power':
            its_power = Pokemons[prop][randomIndex];
            PokemonsIcatch.push(`The range of power is: ${its_power}.`);
            break;
        case 'type':
            its_type = Pokemons[prop][randomIndex];
            PokemonsIcatch.push(`They are evolutions of: ${its_type}.`);
            break;
    }
}

// Format and print my 'pokemons' message
const formatAndPrint = (array) => {
    const formatted = array.join('\n')
    console.log(formatted)
}

// Print your formatted 'pokemons' message
formatAndPrint(PokemonsIcatch);