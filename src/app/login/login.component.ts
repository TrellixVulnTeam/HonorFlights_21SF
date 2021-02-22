import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <section class="hero is-white is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-6-tablet is-6-desktop is-6-widescreen">
              <form action="" class="box has-background-grey-lighter">
                <div class="field">
                  <label for="" class="label">Username</label>
                  <div class="control">
                    <input type="email" placeholder="e.g. adminUser" class="input" required>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">Password</label>
                  <div class="control">
                    <input type="password" placeholder="*******" class="input" required>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="checkbox">
                    <input type="checkbox">
                      Remember me
                  </label>
                </div>
                <div class="field has-text-centered">
                  <button class="button is-dark">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    form {

    }

  `
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
