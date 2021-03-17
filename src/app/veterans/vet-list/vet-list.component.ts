import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vet-list',
  template: `
    <section class="hero has-background-link-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Veteran Medical
          </h1>
        </div>
      </div>
    </section>
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="team-navigation">
        <div id="teams" class="navbar-menu is-active">
          <div class="navbar-start">
            <div id="red-team" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Red Team
              </a>

              <div class="navbar-dropdown">
              </div>
            </div>

            <div id="blue-team" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Blue Team
              </a>

              <div class="navbar-dropdown">
              </div>
            </div>

            <div id="yellow-team" class="navbar-item has-dropdown is-hoverable">
              <a style="color: black;" class="navbar-link">
                Yellow Team
              </a>

              <div class="navbar-dropdown">
              </div>
            </div>
              
            <div id="green-team" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Green Team
              </a>

              <div class="navbar-dropdown">
              </div>
            </div>
            
            <div id="orange-team" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Orange Team
              </a>
              <div class="navbar-dropdown">
              </div>
            </div>

            <div id="purple-team" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Purple Team
              </a>
              <div class="navbar-dropdown">
              </div>
            </div>

            <div id="gold-team" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Gold Team
              </a>
              <div class="navbar-dropdown">
              </div>
            </div>

            <div id="silver-team" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Silver Team
              </a>
              <div class="navbar-dropdown">
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="containter">
    </div>
   <!-- <section class="hero has-background-link-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Veteran Medical
          </h1>
        </div>
      </div>
    </section>
    <div class="container">
      <div onclick="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
          onblur="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            class="dropdown">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span>Click me</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Grid
          </a>
          </div>
        </div>
      </div>
      <div  onclick="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            onblur="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            class="dropdown">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span>Click me</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Grid
          </a>
          </div>
        </div>
      </div>
      <div  onclick="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            onblur="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            class="dropdown">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span>Click me</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Grid
          </a>
          </div>
        </div>
      </div>
      <div  onclick="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            onblur="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            class="dropdown">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span>Click me</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Grid
          </a>
          </div>
        </div>
      </div>
      <div  onclick="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            onblur="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            class="dropdown">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span>Click me</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Grid
          </a>
          </div>
        </div>
      </div>
      <div  onclick="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            onblur="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            class="dropdown">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span>Click me</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Grid
          </a>
          </div>
        </div>
      </div>
      <div  onclick="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            onblur="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            class="dropdown">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span>Click me</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Grid
          </a>
          </div>
        </div>
      </div>
      <div  onclick="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            onblur="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
            class="dropdown">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span>Click me</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Grid
          </a>
          </div>
        </div>
      </div>
    </div>
-->  `,
  styles: [`
  h1 {
    color: #ffffff !important;
  }

  #red-team {
    background-color: #ff0000;
  }

  #blue-team {
    background-color: #0000ff;
  }

  #yellow-team {
    background-color: #ffff00;
    
  }

  #green-team {
    background-color: #00ff00;
  }

  #orange-team {
    background-color: #ffa500;
  }

  #purple-team {
    background-color: #800080;
  }

  #gold-team {
    background-color: #daa520;
  }

  #silver-team {
    background-color: #808080;
  }

  .navbar-link{
    font-weight: bold;
    color: white;
  }

  `
  ]
})
export class VetListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}





//var trigger = document.querySelector(".dropdown-trigger");
//
//trigger?.addEventListener("click", function(event) {
//  document.querySelector(".dropdown").classList.toggle("is-active");
//});

