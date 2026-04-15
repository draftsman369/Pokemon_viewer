import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  imports: [RouterModule],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css',
})
export class PokemonDetail {

  pokemon?: Pokemon;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.pokemon = pokemonService.getById(id);
  }



}
