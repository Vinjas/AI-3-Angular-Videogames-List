import { Component, OnInit } from '@angular/core';
import { Videogame } from '../models/videogame';
import { VideogamesList } from '../models/videogames-list';
import { ApiService } from '../services/api.service';
import { ACTION, RPG, FPS, SPORTS, FIGHTING } from './games-list.constants';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  public videogame : Videogame = {  
    id: 0,
    name: "",
    platforms: [],
    stores: [],
    released: "",
    rating: 0,
    background_image: ""
  };
  public errorMessage : string = "";
  public messageToChild = "hola hola hola hola";

  public actionList : VideogamesList = { results: [], count: 0 };
  public rpgList : VideogamesList = { results: [], count: 0 };
  public fpsList : VideogamesList = { results: [], count: 0 };
  public sportsList : VideogamesList = { results: [], count: 0 };
  public fightingList : VideogamesList = { results: [], count: 0 };

  constructor(private apiservice : ApiService) { }

  // Configuracion para el Modulo de Slick-carousel.
  // La documentacion puede consultarse aqui: https://kenwheeler.github.io/slick/
  slideConfig = {
    "slidesToShow": 6, 
    "slidesToScroll": 3,  
    responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]};

  ngOnInit(): void {
    // GET para la lista de videojuegos de diferentes generos
    this.apiservice.getVideogamesListFiltered(ACTION).subscribe({
      next: actionList => (
        this.actionList = actionList
      ),
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });

    this.apiservice.getVideogamesListFiltered(FPS).subscribe({
      next: fpsList => (
        this.fpsList = fpsList
      ),
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });

    this.apiservice.getVideogamesListFiltered(RPG).subscribe({
      next: rpgList => (
        this.rpgList = rpgList
      ),
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });

    this.apiservice.getVideogamesListFiltered(SPORTS).subscribe({
      next: sportsList => (
        this.sportsList = sportsList
      ),
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });

    this.apiservice.getVideogamesListFiltered(FIGHTING).subscribe({
      next: fightingList => (
        this.fightingList = fightingList
      ),
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }

}
