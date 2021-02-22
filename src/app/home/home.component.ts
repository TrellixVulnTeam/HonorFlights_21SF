import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="columns is-mobile">
  <div class="column is-full-mobile is-full-tablet is-half-desktop is-one-half-widescreen is-one-half-fullhd">
  <app-login></app-login>
  </div>
  <div class="column">
      <section class="hero has-background-link-dark is-fullheight">
    <div class="hero-body is-half">
      <div class="container has-text-centered">  
        <h1 class="title">
          Honor Flight of Rochester
        </h1>
        <h2 class="subtitle">
          Find your Flight!
        </h2>
      </div>
    </div>
  </section>
  </div>
  </div>


  `,
  styles: [`

  h1, h2 {
    color: #ffffff !important;
  }

  @media screen and (max-width: 1024px){
  .hero {
    display: none !important; 
  }
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
