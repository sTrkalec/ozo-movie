import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.css']
})
export class InfoMovieComponent implements OnInit {

  @Input() linkPhoto: string | undefined
  @Input() title: string | undefined
  @Input() imdbRating: string | undefined
  @Input() dataated: string | undefined
  @Input() year: string | undefined
  @Input() runtime: string | undefined
  @Input() plot: string | undefined
  @Input() actors: string | undefined
  @Input() genre: string | undefined

  public generos: string[] | undefined


  ngOnInit(): void {
    this.generos = this.genre?.split(',') ?? [];
  }

}
