import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // email: ['', [Validators.pattern('^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$')]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit() {
  }

  send() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    setTimeout(() => {
      this.form.reset()
    }, 1000);
  }

}
