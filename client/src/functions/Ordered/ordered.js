const ordered = (pokemons, order) => {
    if(order === "Increment id"){
        const onlyApi = pokemons.filter((poke) => /^\d+$/.test(poke.id));
        const onlyBD = pokemons.filter((poke) => !/^\d+$/.test(poke.id));
        const ordered = onlyApi.sort((a, b) => a.id - b.id);
        return ordered.concat(onlyBD);
    };
    if(order === "Decrement id"){
        const onlyApi = pokemons.filter((poke) => /^\d+$/.test(poke.id));
        const onlyBD = pokemons.filter((poke) => !/^\d+$/.test(poke.id));
        const ordered = onlyApi.sort((a, b) => b.id - a.id);
        return ordered.concat(onlyBD);
    };
    if(order === "Alphabetically"){
        return pokemons.sort((a, b)=> a.name.localeCompare(b.name));
    };
    if(order === "damage"){
        return pokemons.sort((a, b)=> b.damage - a.damage)
    }
    return pokemons.sort((a, b)=> b.hp - a.hp);
};

export default ordered;