import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  template: `
  <section class="hero has-background-link-dark is-bold">
    <div class="hero-body">
    <div class="container">
      <h1 class="title">Mission Information</h1>
    </div>
    </div>
  </section>

<div class="notification has-text-black has-background-primary">
  <button class="delete"></button>
  <strong>Welcome to Honor Flight Rochester!</strong>
</div>
<!-- testing  -->
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Current Mission</p>
      <p class="subtitle">Rochester, NY to DC, Maryland</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
  <div class="tile is-parent is-8">
    <article class="tile is-child box">
      <p class="title">Upcoming Missionn</p>
      <p class="subtitle">DC, Maryland to Rochester, NY</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
</div>

`,
  styles: [`
   h1 {
      color: #ffffff !important;
    }
    
  `
  ]
})
export class MissionComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


}
