import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './Modules/actor/actor.component';
import { FilmComponent } from './Modules/film/film.component';

const routes: Routes = [
  {path: 'showFilm', component: FilmComponent},
  {path: 'showActor',component: ActorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
