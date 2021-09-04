
async function getPokes(pages = 0, limit = 12){
    return await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pages * limit}&limit=${limit}`)
        .then(res => res.json())
            .then(res=> {
                const { results } = res;
                const newPoke = results.map( i => i.url)
                const allPokes = newPoke?.map( i => fetch(i).then(res=> res.json())
                    .then(res=> {
                        const { name,sprites, types, id, stats} = res;
                        const pokeimage = sprites?.other?.dream_world?.front_default
                        const poketypes = types?.map(i => i.type.name)
                        const stat = stats?.map(i=> i.base_stat)
                        const pokeStats = {
                            hp: stat[0],
                            atk: stat[1],
                            def: stat[2],
                            sp_atk: stat[3],
                            sp_def: stat[4]
                            }
                        const Pokemon = { id, name, pokeimage, poketypes, pokeStats }
                        return Pokemon;
                    })
                );
            return allPokes
            })
};

export default getPokes
        