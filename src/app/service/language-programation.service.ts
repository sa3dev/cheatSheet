import { NavSchema } from './../components/language-programmation/models/navSchema';
import { catchError, Observable, of, Subject, throwError, BehaviorSubject, tap } from 'rxjs';
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

  navContent: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  navContent$: Observable<any> = this.navContent.asObservable()

  languagecontent: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  languagecontent$: Observable<any> = this.languagecontent.asObservable()

  constructor(private http: HttpClient ) { }

  getNavForLanguage(language: string): Observable<NavSchema[]> {
    return this.http.get<NavSchema[]>(
      environment.url_api + this.LANGUAGE_NAV + language
    ).pipe(
      catchError((error) => {
        this.error.next(error)
        return throwError(error)
      })
    )
  }

  getcontentForLanguage(language: string) {
    return language

  }

  createResourceWithForm(formBody: Object , choiceOfContent: string , language: string  ) {

    let bodyObj = {
      body: formBody,
      choiceOfContent,
      language
    }

    console.log(bodyObj);
    

    return this.http.post(
      environment.url_api + `/language/${choiceOfContent}/${language}` , bodyObj
    )
  }

  getNavAndContentForLanguage(language: string ) {
    return this.http.get<any>(
      environment.url_api + '/language/' +language 
    ).subscribe((resource) => {
        this.navContent.next(resource.data.nav)
        this.languagecontent.next(resource.data.content)
    })
    
  }
}
