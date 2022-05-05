import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-language-programmation',
  templateUrl: './language-programmation.component.html',
  styleUrls: ['./language-programmation.component.scss']
})
export class LanguageProgrammationComponent implements OnInit {

  title: string = "";
  constructor(private router: ActivatedRoute , private route: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe((param)=> {
      this.title = param['language']
    })
  }

  goToAnchor(anchor: string) {
    this.route.navigate([`/home/${this.title}`], { fragment: 'test' });
  }



}
