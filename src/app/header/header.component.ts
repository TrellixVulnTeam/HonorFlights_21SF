import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-dark is-bold" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="/assets/img/logo.png" width="180" height="48">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navMenu">
        <div class="navbar-start">
          <a class="navbar-item" routerLink="/">
            Home
          </a>

          <a class="navbar-item" routerLink="/mission">
            Mission
          </a>

          <a class="navbar-item" routerLink="/veterans">
            Veterans
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Update
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item" routerLink="/busbook">
                Bus Book
              </a>
              <a class="navbar-item">
                User Information
              </a>
              <a class="navbar-item">
                Veteran Information
              </a>
            </div>
          </div>

          <a class="navbar-item" routerLink="/contact">
            Contact
          </a>
        </div>
      </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light" routerLink="/">
                <strong>Log in</strong>
              </a>
            </div>
          </div>
        </div>
    </nav>

    <!--- Menu --->

  `,
  styles: [`
    .navbar-item img{
      max-height: 3.2rem;
    }

  `]
})


export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        var $target = document.getElementById(target);
        
        $target?.classList.toggle('is-active');

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        

      });
    });
  }

});

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $drop = Array.prototype.slice.call(document.querySelectorAll('.has-dropdown'), 0);

  // Check if there are any navbar burgers
  if ($drop.length > 0) {

    // Add a click event on each of them
    $drop.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        var $target = document.getElementById(target);
        
        $target?.classList.toggle('is-active');

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        

      });
    });
  }

});