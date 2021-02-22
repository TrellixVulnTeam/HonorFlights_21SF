import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <section class="hero has-background-link-dark is-bold">
    <div class="hero-body">
    <div class="container">
      <h1 class="title">Contact Us!</h1>
    </div>
    </div>
  </section>

  <!--- 
  nameInout.valid
  nameInput.invalid = 
  nameInput.dirty = clicked in typed and erased
  nameInput.touched = clicked into it then clicked out
  nameInput.untouched
  
  -->
  <!-- columns is a container class-->

<!-- Can add as many column as you want-->
    <section class="section">
    <div class="container">
      <form (ngSubmit)="submitForm()" #contactForm="ngForm">

        <div class="field">
          <label class="label">Name</label>
          <input
            type="text"
            name="name"
            class="input"
            [(ngModel)]="name"
            #nameInput="ngModel"
            required>

          <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
            Your name is required
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <input
            type="email"
            name="email"
            class="input"
            [(ngModel)]="email"
            #emailInput="ngModel"
            required
            email>

          <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
            Your E-mail is required and needs to be a valid email
          </div>

        </div>

        <div class="field">
          <label class="label">Message</label>
          <textarea
            name="message"
            class="textarea"
            [(ngModel)]="message">
          </textarea>
        </div>

        <button 
          type="submit" 
          class="button is-large is-warning"
          [disabled]="contactForm.invalid">
            Send!
        </button>

      </form>
    </div>
  </section>
  `,
  styles: [
    `
    h1 {
      color: #ffffff !important;
    }
    `
  ]
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `My name is ${this.name}. My Email is ${this.email}. My message is ${this.message}`
    alert(message);
  }

}
