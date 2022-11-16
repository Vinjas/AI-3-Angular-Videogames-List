import { Component, Input, OnInit } from '@angular/core';
import { Videogame } from '../models/videogame';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent implements OnInit {
  @Input() gamesList: Videogame = {  
    id: 0,
    name: "",
    platforms: [],
    stores: [],
    released: "",
    rating: 0,
    background_image: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
