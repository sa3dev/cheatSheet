import { Observable, catchError, of, Subscription, takeUntil, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LanguageProgramationService } from './../../../service/language-programation.service';
import { Component, OnInit, Output ,  EventEmitter, AfterViewInit, Input  } from '@angular/core';
import { NavSchema } from './../models/navSchema';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit , AfterViewInit{

  @Input()
  anchor: NavSchema | any; 

  @Output()
  anchorToGo =  new EventEmitter<string>();

  constructor(
    ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {  
  }

  anchortoEmit(value: string) {
    this.anchorToGo.emit(value.toLocaleLowerCase())
  }

}
