import { Observable, catchError, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LanguageProgramationService } from './../../../service/language-programation.service';
import { Component, OnInit, Output ,  EventEmitter, AfterViewInit  } from '@angular/core';
import { NavSchema } from './../models/navSchema';

const test = [
  { 
    title: 'TemplateRef',
    content: 'Template Référence sert a récuperer un élément HTML',
    hash: '#templateref',
  },
  { 
    title: 'Router',
    content: 'Template Référence sert a récuperer un élément HTML',
    hash: '#router',
  },
  { 
    title: 'Navigation',
    content: 'Template Référence sert a récuperer un élément HTML',
    hash: '#router',
  },
  { 
    title: 'Guard',
    content: 'Template Référence sert a récuperer un élément HTML',
    hash: '#router',
  },
  { 
    title: 'Resolver',
    content: 'Template Référence sert a récuperer un élément HTML',
    hash: '#router',
  },
  { 
    title: 'HttpCall',
    content: 'Template Référence sert a récuperer un élément HTML',
    hash: '#router',
  }
]

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit , AfterViewInit{

  anchors: Observable<NavSchema[]> | null; 
  languageNav: string =''

  error = null

  error$


  @Output()
  anchorToGo =  new EventEmitter<string>();

  constructor(
    private langProgramSerivce: LanguageProgramationService,
    private  activeRoute: ActivatedRoute
    ) {
    // init anchors
    this.anchors = null

    // get language from route param
    this.activeRoute.params.subscribe((param)=> {
      this.languageNav = param['language']
    })

    this.error$ = this.langProgramSerivce.error$
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.anchors = this.langProgramSerivce.getNavForLanguage(this.languageNav)
  }

  anchortoEmit(value: string) {
    this.anchorToGo.emit(value.toLocaleLowerCase())
  }
}
