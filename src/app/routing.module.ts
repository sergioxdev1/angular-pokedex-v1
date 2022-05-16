import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
 { path: 'about', component: AboutComponent },
 { path: 'pokemon', component: PokemonComponent },
 { path: 'pokemon/:id', component: PokemonComponent },
 { path: '**', redirectTo: 'pokemon', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
