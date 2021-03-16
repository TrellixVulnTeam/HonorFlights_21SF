import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veteran-med',
  template: `
  <section class="hero has-background-link-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Veteran Medical Report
        </h1>
      </div>
    </div>
  </section>
  `,
  styles: [
  ]
})
export class VeteranMedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
