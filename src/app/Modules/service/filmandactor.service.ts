import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActorModel } from '../model/actorModel';
import { FilmModel } from '../model/filmModel';
import { ResponseModel } from '../model/responseModel';
import { SearchActor } from '../model/searchActor';
import { SearchFilm } from '../model/searchFilm';
import { SentFilm } from '../model/sentFilm';
import {tap} from "rxjs/operators";
import { SentActor } from '../model/sentActor';

@Injectable({
  providedIn: 'root'
})
export class FilmandactorService {
  private httpOption = {
    headers: new HttpHeaders({
      'content-type': 'application/json;charset=UTF-8'

    })
  };

  constructor(private http: HttpClient) { }

  getAllActor():Observable<ResponseModel<Array<ActorModel>>>{
    const url = environment.module.getAllActor;
    return this.http.get<ResponseModel<Array<ActorModel>>>(url,this.httpOption).pipe(
      tap(_=> console.log('Get AllActor Success'))      
    );
  }  

  getSearchFilm(searchFilmModel:SearchFilm):Observable<ResponseModel<Array<any>>>{
    const url = environment.module.getSearchFilm;
    return this.http.post<ResponseModel<Array<FilmModel>>>(url,searchFilmModel,this.httpOption).pipe(
      tap(_=> console.log('Get Search Films Success'))      
    );
  }

  getAllFilms():Observable<ResponseModel<Array<FilmModel>>>{
    const url = environment.module.getAllFilm;
    return this.http.get<ResponseModel<Array<FilmModel>>>(url,this.httpOption).pipe(
      tap(_=> console.log('Get Films Success'))      
    );
  }

  getActorInFilm(id:SentFilm):Observable<ResponseModel<Array<any>>>{
    const url = environment.module.getActorInFilm;
    return this.http.post<ResponseModel<Array<ActorModel>>>(url,id,this.httpOption).pipe(
      tap(_=> console.log('Get Actor Success'))      
    );
  }

  getSearchActor(searchActor:SearchActor):Observable<ResponseModel<Array<any>>>{
    const url = environment.module.getSearchActor;
    return this.http.post<ResponseModel<Array<ActorModel>>>(url,searchActor,this.httpOption).pipe(
      tap(_=> console.log('Get Search Actor Success'))
    );
  }

  getFilmByActor(sentFilm:SentActor):Observable<ResponseModel<Array<any>>>{
    const url = environment.module.getFilmByActor;
    return this.http.post<ResponseModel<Array<FilmModel>>>(url,sentFilm,this.httpOption).pipe(
      tap(_=> console.log('Get Film By Actor Success'))
    );
  }
}
