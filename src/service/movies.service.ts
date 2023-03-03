import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private httpService: HttpService
  ) { 
    console.log()
  }



  async getMovies(name: string) {
    let url = `https://www.omdbapi.com/?t=${name}&apikey=${environment.apiKey}`;
    let result = await this.httpService.get(url)
    return result
  }

}
