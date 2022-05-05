import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  static API_BASE = 'https://api.github.com/users/sa3dev'

  repositories: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  allRepositories$ : Observable<any> = this.repositories.asObservable()

  constructor(private http: HttpClient) { }

  getAllRepos(): Observable<any> {
    return this.http.get(
      GithubReposService.API_BASE + '/repos'  
    ).pipe(
      tap( repos => this.repositories.next(repos))
    )
  }
}
