import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  private pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      type: 'Grass/Poison',
      description: 'A calm Pokémon with a plant bulb on its back.',
    },
    {
      id: 4,
      name: 'Charmander',
      type: 'Fire',
      description: 'A fire Pokémon with a flame on its tail.',
    },
    {
      id: 7,
      name: 'Squirtle',
      type: 'Water',
      description: 'A small turtle Pokémon that shoots water.',
    },
    {
      id: 25,
      name: 'Pikachu',
      type: 'Electric',
      description: 'An electric Pokémon that stores energy in its cheeks.',
    },
    {
      id: 39,
      name: 'Jigglypuff',
      type: 'Fairy',
      description: 'Sings a lullaby that puts enemies to sleep.'
    },
    {
      id: 133,
      name: 'Eevee',
      type: 'Normal',
      description: 'It has the ability to alter the composition of its body to suit its surrounding environment.'
    },
    {
      id: 143,
      name: 'Snorlax',
      type: 'Normal',
      description: 'Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.'
    },
    {
      id: 150,
      name: 'Mewtwo',
      type: 'Psychic',
      description: 'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.'
    },
    {
      id: 6,
      name: 'Charizard',
      type: 'Fire/Flying',
      description: 'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.'
    },
    {
      id: 94,
      name: 'Gengar',
      type: 'Ghost/Poison',
      description: 'To steal the life of its target, it slips into the prey\'s shadow and silently waits for an opportunity.'
    },
    {
      id: 149,
      name: 'Dragonite',
      type: 'Dragon/Flying',
      description: 'An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.'
    },
    {
      id: 448,
      name: 'Lucario',
      type: 'Fighting/Steel',
      description: 'By catching the aura emanating from others, it can read their thoughts and movements.'
    },
    {
      id: 445,
      name: 'Garchomp',
      type: 'Dragon/Ground',
      description: 'When it folds up its body and extends its wings, it looks like a jet plane. It flies at sonic speed.'
    },
    {
      id: 658,
      name: 'Greninja',
      type: 'Water/Dark',
      description: 'It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.'
    },
    {
      id: 9,
      name: 'Blastoise',
      type: 'Water',
      description: 'A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.'
    }
  ]

  getAll(): Pokemon[] {
    return this.pokemons;
  }

  getById(id: number): Pokemon | undefined {
    return this.pokemons.find(pokemon => pokemon.id === id);
  }
}
