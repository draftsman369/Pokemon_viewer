import { Component } from '@angular/core';
import { PokemonCard } from '../../components/pokemon-card/pokemon-card';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCard],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {

  pokemons: Pokemon[] = []

  constructor(private pokemonService: PokemonService) {
    this.pokemons = pokemonService.getAll();
  }

}
