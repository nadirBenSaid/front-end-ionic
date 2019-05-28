import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule , Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.page.html',
  styleUrls: ['./recover-pass.page.scss'],

})
export class RecoverPassPage  {

  public inputEmail: FormGroup;

  constructor(public router: Router, public formBuilder: FormBuilder) {

    this.inputEmail = formBuilder.group({
        inputEmail: ['' ,[
		Validators.required,
		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
    });


}
}

