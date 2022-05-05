import { NavSchema } from './../components/language-programmation/models/navSchema';
import { catchError, Observable, of, Subject, throwError } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageProgramationService {

  private LANGUAGE_NAV: string = "/language/nav/"

  error: Subject<HttpErrorResponse> = new Subject<HttpErrorResponse>()
  error$: Observable<any> = this.error.asObservable()

  constructor(private http: HttpClient ) { }

  getNavForLanguage(language: string): Observable<NavSchema[]> {
    return this.http.get<NavSchema[]>(
      environment.url_api + this.LANGUAGE_NAV + language
    ).pipe(
      catchError((error) => {
        // send to analatycs server 
        this.error.next(error)
        return throwError(error)
      })

      // throwError((err) => new Error(err))
    )
  }

  getcontentForLanguage(language: string) {
    return language

  }


  createResourceWithForm(wraperForm: Object ) {

    console.log(wraperForm);
    
    // /language/:choice/:language
    return this.http.post(
      environment.url_api + '/language/nav/javascript' , wraperForm
    )
  }
}
