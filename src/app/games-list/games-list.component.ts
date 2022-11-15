import { Component, OnInit } from '@angular/core';
import { Videogame } from '../models/videogame';
import { VideogamesList } from '../models/videogames-list';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  public videogame: Videogame = { value: "", icon_url: "", id: "", url: "" };
  public videogamesList: VideogamesList = { results: [], count: 0 };

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getVideogamesListFiltered("action").subscribe(
      videogamesList => (this.videogamesList = videogamesList)
    );
    

  }

}
