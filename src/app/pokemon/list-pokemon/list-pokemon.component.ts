import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[] = [];

  constructor(
    private router: Router,
    private PokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.PokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon): void {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}
