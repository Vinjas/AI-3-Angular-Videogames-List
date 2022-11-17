import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Screenshots } from '../models/screenshots';
import { Videogame } from '../models/videogame';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.scss'],
})
export class DetailsGameComponent implements OnInit {
  public id: string | null = '';
  public errorMessage: string = '';
  public gameDetails: Videogame = {
    id: 0,
    name: '',
    platforms: [],
    stores: [],
    released: '',
    rating: 0,
    background_image: '',
    description_raw: ''
  };
  public screenshots: Screenshots;

  public slideConfigMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  };

  public slideConfigNav = {
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-main',
    dots: false,
    focusOnSelect: true,
    arrows: true,
    responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    ]
  };

  constructor(
    private apiservice: ApiService,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.apiservice.getVideogame(this.id).subscribe({
      next: (gameDetails) => (this.gameDetails = gameDetails),
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });

    this.apiservice.getScreenshots(this.id).subscribe({
      next: (screenshots) => (this.screenshots = screenshots),
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });

  }
}
