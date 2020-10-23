import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MyValidator } from 'src/app/utils/my-validator';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(): void {
    this.form = this.formBuilder.group({
      age: [0, [MyValidator.age]],
      price: [0, Validators.max(3000)],
      terms: ['', Validators.requiredTrue],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      text: ['', [Validators.required, Validators.maxLength(80)]],
      date: ['', Validators.required],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
    // this.form.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
    //   console.log(value);
    // });
  }
  save(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  doSomething(): void {
    console.log('click');
  }
  get emailField(): AbstractControl {
    return this.form.get('email');
  }
  get emailFieldIsValid(): boolean {
    return this.emailField.touched && this.emailField.valid;
  }
  get emailFieldIsInvalid(): boolean {
    return this.emailField.touched && this.emailField.invalid;
  }
  get nameField(): AbstractControl {
    return this.form.get('name');
  }
  get nameFieldIsValid(): boolean {
    return this.nameField.touched && this.nameField.valid;
  }
  get nameFieldIsInvalid(): boolean {
    return this.nameField.touched && this.nameField.invalid;
  }
  get dateField(): AbstractControl {
    return this.form.get('date');
  }
  get dateFielIsValid(): boolean {
    return this.dateField.touched && this.dateField.valid;
  }
  get dateFielIsInvalid(): boolean {
    return this.dateField.touched && this.dateField.invalid;
  }
}
