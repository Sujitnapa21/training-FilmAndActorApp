import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActorModel } from '../model/actorModel';
import { FilmModel } from '../model/filmModel';
import { SearchFilm } from '../model/searchFilm';
import { SentActor } from '../model/sentActor';
import { SentFilm } from '../model/sentFilm';
import { FilmandactorService } from '../service/filmandactor.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  getFilms : Array<FilmModel> = new Array<FilmModel>();
  searchFilm: SearchFilm = new SearchFilm();
  check:boolean = false;
  name:string = '';
  sentFilm: SentFilm = new SentFilm;
  getActor: Array<ActorModel> = new Array<ActorModel>();


  filmForm = new FormGroup({
    title: new FormControl(''),
    releaseYear: new FormControl(''),
    
  
  })

  constructor(private filmandactorService:  FilmandactorService) { }

  //ถ้าเอาอะไรใส่ไว้ในนี้จะทำก่อน
  ngOnInit(): void {
    this.filmandactorService.getAllFilms().subscribe(res =>{
      this.getFilms = res.data;
      console.log(res.data);      
    })

  }

  
  search(){
    this.searchFilm = this.filmForm.value;
    console.log(this.searchFilm);
    if (!this.searchFilm.releaseYear) {
      this.searchFilm.releaseYear = "";
    }    
    this.filmandactorService.getSearchFilm(this.searchFilm).subscribe(res =>{
      this.getFilms = res.data;
      console.log(res.data);
      
    })
  }

  search1(id:number,title:string){
    this.name = title;
    this.sentFilm.filmId = id;
    //คล้าย printf ดูว่าจะได้อะไรออกมา
    console.log("Title: "+this.name +"\n"+"ID: "+id);
    this.check = true;
    console.log(this.check);    
    
    this.filmandactorService.getActorInFilm(this.sentFilm)
    .subscribe(res => {
      this.getActor = res.data;
      this.check = true;
      console.log(res.data);      
    })
  }

  saveExcel(){
    this.searchFilm = this.filmForm.value;
    console.log(this.searchFilm);

    this.filmandactorService.searchFilmExportExcel(this.searchFilm).subscribe(res => {
      const blob = new Blob([res],{type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      FileSaver.saveAs(blob,'FilmExportExcel')
      console.log(res.data);
    })

  }

  back(){
    this.check = false;
    console.log(this.check); 
  }

}
