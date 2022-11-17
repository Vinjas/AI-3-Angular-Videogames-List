import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { VideogamesList } from '../models/videogames-list';
import { Videogame } from '../models/videogame';
import { Screenshots } from '../models/screenshots';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private RAWG_API_KEY = 'def2016b414f4fc3b3b1bf8371eda6c0';
  private VideogamesURL = `https://api.rawg.io/api/games`;
  
  constructor(private http: HttpClient) {}

  // Llamada a la API de RAWG pasando como parametros ciertos filtros de busqueda (genero)
  // Siempre devolvera 10 resultados máximo y los ordenara por puntuación en metacritic
  public getVideogamesListFiltered(genre: string): Observable<VideogamesList> {
    let genreListURL = `${this.VideogamesURL}?page_size=10&genres=${genre}&platforms=18&ordering=-metacritic&key=${this.RAWG_API_KEY}`;
    
    return this.http.get<VideogamesList>(genreListURL);
  }

  // Llamadaa la API de RAWG que devolvera la información completa de un videojuego segun su id
  public getVideogame(id: string | null): Observable<Videogame> {
    let videogameDetailsURL = `${this.VideogamesURL}/${id}?key=${this.RAWG_API_KEY}`;
    
    return this.http.get<Videogame>(videogameDetailsURL);
  }

  // Llamadaa la API de RAWG que devolvera la información completa de una lista de screenshots
  public getScreenshots(id: string | null): Observable<Screenshots> {
    let screenshotsURL = `${this.VideogamesURL}/${id}/screenshots?key=${this.RAWG_API_KEY}`;
    
    return this.http.get<Screenshots>(screenshotsURL);
  }
}