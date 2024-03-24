import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [],
  template: `<div class="pokemon-card">
    <p>{{ pokemonInfo.name }}</p>
  </div>`,
  styles: `
    .pokemon-card {
      background-color: #cc0000;
      border-radius: 5px;
      box-shadow: 3px 4px #000;
      font-size: 1.5rem;
      text-transform: capitalize;
    }
  `,
})
export class PokemonItemComponent {
  @Input() pokemonInfo!: Pokemon;
}
