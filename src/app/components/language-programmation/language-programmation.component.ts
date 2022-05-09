import { LanguageProgramationService } from './../../service/language-programation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-language-programmation',
  templateUrl: './language-programmation.component.html',
  styleUrls: ['./language-programmation.component.scss']
})
export class LanguageProgrammationComponent implements OnInit {

  title: string = "";
  
  constructor(private router: ActivatedRoute , private route: Router , public langProgramSerivce: LanguageProgramationService) { }

  ngOnInit(): void {
    this.router.params.subscribe((param)=> {
      this.title = param['language']
    })

    this.langProgramSerivce.getNavAndContentForLanguage(this.title)
  }

  goToAnchor(anchor: string) {
    this.route.navigate([`/dashboard/language/${this.title}`], { fragment: anchor });
  }

  returnTODash() {
    
  }
}
