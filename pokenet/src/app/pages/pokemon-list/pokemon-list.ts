import { Component, signal, computed } from '@angular/core';
import { PokemonCard } from '../../components/pokemon-card/pokemon-card';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCard, RouterModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {

  pokemons = signal<Pokemon[]>([]);
  searchTerm = signal('');

  filteredPokemons = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();

    if (!term) {
      return this.pokemons();
    }

    return this.pokemons().filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term)
    );
  });
  constructor(private pokemonService: PokemonService) {
    this.pokemons.set(this.pokemonService.getAll());
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

}
