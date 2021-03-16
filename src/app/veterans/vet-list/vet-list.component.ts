import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vet-list',
  template: `
    <section class="hero has-background-link-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Bus Book Information
          </h1>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class VetListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
