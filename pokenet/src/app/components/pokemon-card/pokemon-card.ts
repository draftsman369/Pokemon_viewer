import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  imports: [RouterModule],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCard {
  @Input({ required: true }) pokemon!: Pokemon;
}
