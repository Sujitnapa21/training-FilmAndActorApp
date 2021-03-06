// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  module:{
    getAllActor: 'http://localhost:8080/api/getAllActor',
    getAllFilm: 'http://localhost:8080/api/getAllFilm',
    getSearchFilm: 'http://localhost:8080/api/getSearchFilm',
    getSearchActor: 'http://localhost:8080/api/getSearchActor',
    getActorInFilm: 'http://localhost:8080/api/getActorInFilm',
    getFilmByActor: 'http://localhost:8080/api/getFilmByActor',
    filmExportExcel: 'http://localhost:8080/api/excel/film',
    actorExportExcel: 'http://localhost:8080/api/excel/actor',
    searchFilmExportExcel: 'http://localhost:8080/api/excel/searchFilm',
    searchActorExportExcel: 'http://localhost:8080/api/excel/searchActor'

   
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
