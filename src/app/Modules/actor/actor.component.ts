import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActorModel } from '../model/actorModel';
import { FilmModel } from '../model/filmModel';
import { SearchActor } from '../model/searchActor';
import { SentActor } from '../model/sentActor';
import { SentFilm } from '../model/sentFilm';
import * as FileSaver from 'file-saver';

import { FilmandactorService } from '../service/filmandactor.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})

export class ActorComponent implements OnInit {

  check:boolean = false;
  name:string='';
  getActor: Array<ActorModel> = Array<ActorModel>();
  getFilms: Array<FilmModel> = Array<FilmModel>();
  searchActor: SearchActor = new SearchActor();
  sentActor: SentActor = new SentActor();

  constructor(
    private filmandactorService:  FilmandactorService) { }

  ngOnInit(): void {
    this.filmandactorService.getAllActor().subscribe(res =>{
      this.getActor = res.data;
      console.log(res.data);
      
    })
  }
  actorForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })

  search(){
    this.searchActor = this.actorForm.value;
    console.log(this.searchActor);
       
    this.filmandactorService.getSearchActor(this.searchActor)
    .subscribe(res =>{
      this.getActor = res.data;
      console.log(res.data);
      
    })
  }

  search1(id:number,firstName:string,lastName:string){
    this.name = firstName+" "+lastName;
    this.sentActor.actorId = id;    
    console.log("Actor Name: "+this.name +"\n"+"ID: "+id);
    this.check = true;
    console.log(this.check);    
    
    this.filmandactorService.getFilmByActor(this.sentActor)
    .subscribe(res => {
      this.getFilms = res.data;
      this.check = true;
      console.log(res.data);      
    })
  }

  saveExcel(){
    this.searchActor = this.actorForm.value;
    console.log(this.searchActor);

    this.filmandactorService.searchActorExportExcel(this.searchActor).subscribe(res => {
      const blob = new Blob([res],{type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      FileSaver.saveAs(blob,'ActorListExcel')
      console.log(res.data);
    })

    
  }

  back(){
    this.check = false;
    console.log(this.check); 
  }

}

