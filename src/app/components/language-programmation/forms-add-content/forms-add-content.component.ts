import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
@Component({
  selector: 'app-forms-add-content',
  templateUrl: './forms-add-content.component.html',
  styleUrls: ['./forms-add-content.component.scss']
})
export class FormsAddContentComponent implements OnInit {

  addcontent: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  lang: string = ''
  wrapperForm: any = {}

  choices: string[] = ['Nav contenent' , 'Body content']

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(param => {
      this.lang = (param['language'])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.wrapperForm.form = this.addcontent
    this.wrapperForm.language = this.lang
    // this.wrapperForm.mode = this.

    console.warn(this.addcontent)
    console.warn(this.wrapperForm)
  }
}
