import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videogame } from '../models/videogame';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.scss']
})
export class DetailsGameComponent implements OnInit {
  public id : string | null = "";
  public errorMessage : string = "";
  public gameDetails : Videogame = {     
    id: 0,
    name: "",
    platforms: [],
    stores: [],
    released: "",
    rating: 0,
    background_image: "" 
  };

  constructor(private apiservice : ApiService, private _Activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
    });

    this.apiservice.getVideogame(this.id).subscribe({
      next: gameDetails => (
        this.gameDetails = gameDetails
      ),
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }

}
