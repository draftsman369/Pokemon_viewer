import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  imports: [RouterModule],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css',
})
export class PokemonDetail implements OnInit {

  pokemon?: Pokemon;
  evolutionChain: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.pokemon = this.pokemonService.getById(id);
      this.loadEvolutions();
    });
  }

  private loadEvolutions() {
    this.evolutionChain = [];
    if (this.pokemon?.evolutions) {
      this.pokemon.evolutions.forEach(evId => {
        const evPokemon = this.pokemonService.getById(evId);
        if (evPokemon) {
          this.evolutionChain.push(evPokemon);
        }
      });
    }
  }
}
