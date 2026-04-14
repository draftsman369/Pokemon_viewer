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
    }
  ]

  getAll(): Pokemon[] {
    return this.pokemons;
  }

  getById(id: number): Pokemon | undefined {
    return this.pokemons.find(pokemon => pokemon.id === id);
  }
}
