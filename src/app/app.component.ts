import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/service/movies.service';




interface MovieInfos {
  linkPhoto: string | undefined;
  title: string | undefined;
  imdbRating: string | undefined;
  dataated: string | undefined;
  year: string | undefined;
  runtime: string | undefined;
  plot: string | undefined;
  actors: string | undefined;
  genre: string | undefined;
  erro: string | undefined
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'my-app';

  public isErro:boolean = false


  public movieInfos: MovieInfos = {
    linkPhoto: undefined,
    title: undefined,
    actors: undefined,
    dataated: undefined,
    genre: undefined,
    imdbRating: undefined,
    plot: undefined,
    runtime: undefined,
    year: undefined,
    erro: undefined
  }



  constructor(private moviesServices: MoviesService) {
  }

  movieForm = new FormGroup({
    movieName: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  hasMovies() {
    return this.movieInfos.title != undefined ? true : false
  }

  async searchMovie() {
    let movieName = this.movieForm.value.movieName
    this.getMovies(movieName)
  }



  resetValues() {
    this.movieInfos.linkPhoto = undefined
    this.movieInfos.title = undefined
    this.movieInfos.actors = undefined
    this.movieInfos.dataated = undefined
    this.movieInfos.genre = undefined
    this.movieInfos.imdbRating = undefined
    this.movieInfos.plot = undefined
    this.movieInfos.runtime = undefined
    this.movieInfos.year = undefined
    this.movieInfos.erro = undefined
  }


  async getMovies(name: any) {
   
    this.resetValues()
    try {
      let result = await this.moviesServices.getMovies(name)

      this.setValues(result)

    } catch (error) {
    }
  }


  setValues(data:object | any){
    console.log(data)
    let {Title, Poster, imdbRating, Rated, Year, Runtime, Genre, Plot, Actors} = data
    this.movieInfos.title = Title
    this.movieInfos.linkPhoto = Poster
    this.movieInfos.imdbRating = imdbRating
    this.movieInfos.year = Year
    this.movieInfos.runtime = Runtime
    this.movieInfos.genre = Genre
    this.movieInfos.plot = Plot
    this.movieInfos.actors = Actors    
    this.movieInfos.dataated = Rated

    if(data.Response == "False") return this.movieInfos.erro = data.Error

  }


}
