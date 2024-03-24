import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonItemComponent } from '../pokemon-item/pokemon-item.component';
import { ErrorMessageComponent } from '../../error-message/error-message.component';
import { PokemonService } from '../../core/services/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [AsyncPipe, PokemonItemComponent, ErrorMessageComponent],
  template: `
    <ul class="pokemon-list">
      @for (pokemon of pokemons; track $index) {
        <li>
          <img
            [(src)]="pokemon.sprites.front_default"
            alt="pokemon picture avatar"
          />
          <p>{{ pokemon.name }}</p>
          <p class="subtitle">Height: {{ pokemon.height }} in</p>
          <p class="subtitle">Weight: {{ pokemon.weight }} gr</p>
        </li>
      }
    </ul>
  `,
  styles: `
    .pokemon-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      list-style: none;
      gap: 10px;
      padding: 10px;
    }

    .pokemon-list li {
      text-align: center;
    }
    p {
      color: rgb(137, 234, 179);
    }
    .subtitle {
      color: rgb(137, 234, 179);
      font-size: 10px;
    }
  `,
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.service.getPokemons().subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this.service.getMoreData(result.name).subscribe((response: any) => {
          this.pokemons.push(response);
        });
      });
    });
  }
}
