import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busbook',
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
  <div class="heightMaker">
    <div class="container" id="contained">
      <div id="mainContainer">
        <div id="viewerContainer">
          <pdf-viewer [src]="pdfSrc"
            [original-size]="false"
            [autoresize]='true'
          ></pdf-viewer>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`

  h1 {
    color: #ffffff !important;
  }

  #contained {
    height: 862px !important;
  }

  #mainContainer{
    margin-top: 10px;
    padding: 15px; 
    height: 1000px;
    min-width: 200px; 
    background-color: grey;
    overflow: auto;
  }

  #viewerContainer {
    margin: auto;
    width: 90%;
    padding: 10px;
  }

  pdf-viewer {
    overflow: auto;
    display: block;
    align-items: center;
    max-width: 1000px;
    justify-content: center;
    filter: drop-shadow(5px 5px 5px #222222);
  }
  `]
})
export class BusbookComponent implements OnInit {

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}