import { LanguageProgramationService } from './../../../service/language-programation.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
@Component({
  selector: 'app-forms-add-content',
  templateUrl: './forms-add-content.component.html',
  styleUrls: ['./forms-add-content.component.scss']
})
export class FormsAddContentComponent implements OnInit {

  addcontentForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  lang: string = ''
  wrapperForm: any = {}

  choices: string[] = ['Nav contenent' , 'Body content']

  constructor(private router: ActivatedRoute , private langProgService: LanguageProgramationService) {
    this.router.params.subscribe(param => {
      this.lang = (param['language'])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

    const formValue = this.addcontentForm.value
    this.wrapperForm.language = this.lang
    this.wrapperForm.formContent = formValue

    console.warn(this.wrapperForm)

    this.langProgService.createResourceWithForm(this.wrapperForm).subscribe(
      mess => {
        console.log(mess)
      },
      error => {
        console.error(error)
      }
    )

  }
}
