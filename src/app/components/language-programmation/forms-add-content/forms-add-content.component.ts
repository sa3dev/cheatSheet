import { LanguageProgramationService } from './../../../service/language-programation.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forms-add-content',
  templateUrl: './forms-add-content.component.html',
  styleUrls: ['./forms-add-content.component.scss']
})
export class FormsAddContentComponent implements OnInit {

  addcontentForNav: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('' ,  Validators.required),
    hash:  new FormControl('#'),
  })
  addcontentForNContent: FormGroup = new FormGroup({
    linkToNav: new FormControl('') ,
    content: new FormControl('')
  })

  choiceOfcontent = 'nav'

  lang: string = ''

  constructor(private router: ActivatedRoute , private langProgService: LanguageProgramationService) {
    this.router.params.subscribe(param => {
      this.lang = (param['language'])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(choiceOfcontent: string) {

    if(choiceOfcontent === 'nav') {
      this.addcontentForNav.patchValue({
        hash: '#'+ this.addcontentForNav.value.title
      })

      if(this.addcontentForNav.valid) {
        this.langProgService.createResourceWithForm(this.addcontentForNav.value , choiceOfcontent , this.lang ).subscribe(
          message => {
            console.log(message)
          },
          error => {
            console.error(error)
          }
        )
      }
    
      this.addcontentForNav.reset()
            
    }

    if(choiceOfcontent === 'content') {

      if(this.addcontentForNContent.valid ) {

        // this.langProgService.createResourceWithForm().subscribe(
        //   mess => {
        //     console.log(mess)
        //   },
        //   error => {
        //     console.error(error)
        //   }
        // )

      }
      this.addcontentForNContent.reset()
 
    }



  }
}
