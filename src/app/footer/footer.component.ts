import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer has-background-black padding-bottom:100%">
      <div class="content has-text-centered has-text-white">
        <p>
          Made By dotQuiet Team
        </p>
      </div>
    </footer>

  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
