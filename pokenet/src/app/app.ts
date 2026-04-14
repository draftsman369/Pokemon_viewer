import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {
    this.pokemons = this.pokemonService.getAll();
  }


  protected readonly title = signal('pokenet');
}
