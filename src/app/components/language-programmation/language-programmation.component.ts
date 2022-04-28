import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-language-programmation',
  templateUrl: './language-programmation.component.html',
  styleUrls: ['./language-programmation.component.scss']
})
export class LanguageProgrammationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=> {
      console.log(param['language'])
    })
  }


  

}
