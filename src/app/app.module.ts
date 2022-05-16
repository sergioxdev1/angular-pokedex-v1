import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';

import { PokemonService } from './pokemon/pokemon.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [ 
    AboutComponent,
    AppComponent,
    PokemonComponent,
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  entryComponents: [
    PokemonDetailsComponent
  ],
  providers: [
    PokemonService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
