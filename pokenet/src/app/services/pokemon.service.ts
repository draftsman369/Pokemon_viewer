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
      evolutions: [1, 2, 3]
    },
    {
      id: 2,
      name: 'Ivysaur',
      type: 'Grass/Poison',
      description: 'There is a bud on this Pokémon\'s back. To support its weight, Ivysaur\'s legs and trunk grow thick and strong.',
      evolutions: [1, 2, 3]
    },
    {
      id: 3,
      name: 'Venusaur',
      type: 'Grass/Poison',
      description: 'There is a large flower on Venusaur\'s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight.',
      evolutions: [1, 2, 3]
    },
    {
      id: 4,
      name: 'Charmander',
      type: 'Fire',
      description: 'A fire Pokémon with a flame on its tail.',
      evolutions: [4, 5, 6]
    },
    {
      id: 5,
      name: 'Charmeleon',
      type: 'Fire',
      description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
      evolutions: [4, 5, 6]
    },
    {
      id: 6,
      name: 'Charizard',
      type: 'Fire/Flying',
      description: 'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.',
      evolutions: [4, 5, 6]
    },
    {
      id: 7,
      name: 'Squirtle',
      type: 'Water',
      description: 'A small turtle Pokémon that shoots water.',
      evolutions: [7, 8, 9]
    },
    {
      id: 8,
      name: 'Wartortle',
      type: 'Water',
      description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
      evolutions: [7, 8, 9]
    },
    {
      id: 9,
      name: 'Blastoise',
      type: 'Water',
      description: 'A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.',
      evolutions: [7, 8, 9]
    },
    {
      id: 172,
      name: 'Pichu',
      type: 'Electric',
      description: 'It is not yet skilled at storing electricity. It may send out a jolt if amused or startled.',
      evolutions: [172, 25, 26]
    },
    {
      id: 25,
      name: 'Pikachu',
      type: 'Electric',
      description: 'An electric Pokémon that stores energy in its cheeks.',
      evolutions: [172, 25, 26]
    },
    {
      id: 26,
      name: 'Raichu',
      type: 'Electric',
      description: 'Its tail discharges electricity into the ground, protecting it from getting shocked.',
      evolutions: [172, 25, 26]
    },
    {
      id: 39,
      name: 'Jigglypuff',
      type: 'Fairy',
      description: 'Sings a lullaby that puts enemies to sleep.',
      evolutions: [174, 39, 40]
    },
    {
      id: 40,
      name: 'Wigglytuff',
      type: 'Fairy',
      description: 'The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.',
      evolutions: [174, 39, 40]
    },
    {
      id: 174,
      name: 'Igglybuff',
      type: 'Fairy',
      description: 'It has a very soft body. If it starts to roll, it will bounce all over and be impossible to stop.',
      evolutions: [174, 39, 40]
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
      description: 'Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.',
      evolutions: [446, 143]
    },
    {
      id: 446,
      name: 'Munchlax',
      type: 'Normal',
      description: 'It conceals food under the long hair on its body. It lugs it around for snacks.',
      evolutions: [446, 143]
    },
    {
      id: 150,
      name: 'Mewtwo',
      type: 'Psychic',
      description: 'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.'
    },
    {
      id: 92,
      name: 'Gastly',
      type: 'Ghost/Poison',
      description: 'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.',
      evolutions: [92, 93, 94]
    },
    {
      id: 93,
      name: 'Haunter',
      type: 'Ghost/Poison',
      description: 'Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes.',
      evolutions: [92, 93, 94]
    },
    {
      id: 94,
      name: 'Gengar',
      type: 'Ghost/Poison',
      description: 'To steal the life of its target, it slips into the prey\'s shadow and silently waits for an opportunity.',
      evolutions: [92, 93, 94]
    },
    {
      id: 147,
      name: 'Dratini',
      type: 'Dragon',
      description: 'Long considered a mythical Pokémon until recently, when a small colony was found living underwater.',
      evolutions: [147, 148, 149]
    },
    {
      id: 148,
      name: 'Dragonair',
      type: 'Dragon',
      description: 'A mystical Pokémon that exudes a gentle aura. Has the ability to change climate conditions.',
      evolutions: [147, 148, 149]
    },
    {
      id: 149,
      name: 'Dragonite',
      type: 'Dragon/Flying',
      description: 'An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.',
      evolutions: [147, 148, 149]
    },
    {
      id: 447,
      name: 'Riolu',
      type: 'Fighting',
      description: 'It uses the shapes of auras, which change according to emotion, to communicate with others.',
      evolutions: [447, 448]
    },
    {
      id: 448,
      name: 'Lucario',
      type: 'Fighting/Steel',
      description: 'By catching the aura emanating from others, it can read their thoughts and movements.',
      evolutions: [447, 448]
    },
    {
      id: 443,
      name: 'Gible',
      type: 'Dragon/Ground',
      description: 'It nests in small, horizontal holes in cave walls. It pounces to catch prey that stray too close.',
      evolutions: [443, 444, 445]
    },
    {
      id: 444,
      name: 'Gabite',
      type: 'Dragon/Ground',
      description: 'There is a long-held belief that medicine made from its scales will heal even incurable illnesses.',
      evolutions: [443, 444, 445]
    },
    {
      id: 445,
      name: 'Garchomp',
      type: 'Dragon/Ground',
      description: 'When it folds up its body and extends its wings, it looks like a jet plane. It flies at sonic speed.',
      evolutions: [443, 444, 445]
    },
    {
      id: 656,
      name: 'Froakie',
      type: 'Water',
      description: 'It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked.',
      evolutions: [656, 657, 658]
    },
    {
      id: 657,
      name: 'Frogadier',
      type: 'Water',
      description: 'It can throw bubble-covered pebbles with precise control, hitting empty cans up to a hundred feet away.',
      evolutions: [656, 657, 658]
    },
    {
      id: 658,
      name: 'Greninja',
      type: 'Water/Dark',
      description: 'It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.',
      evolutions: [656, 657, 658]
    }
  ]

  getAll(): Pokemon[] {
    return this.pokemons;
  }

  getById(id: number): Pokemon | undefined {
    return this.pokemons.find(pokemon => pokemon.id === id);
  }
}
