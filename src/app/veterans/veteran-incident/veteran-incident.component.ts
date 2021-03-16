import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veteran-incident',
  template: `
  <section class="hero has-background-link-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Incident Report
        </h1>
      </div>
    </div>
  </section>
  `,
  styles: [
  ]
})
export class VeteranIncidentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
