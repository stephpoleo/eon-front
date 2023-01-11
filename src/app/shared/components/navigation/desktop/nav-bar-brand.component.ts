import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-brand',
  template: `
    <div class="nav-bar__brand">
      <a routerLink="/">
        <img
          alt="Eon logo"
          src="https://storage.googleapis.com/assets-origenes/images/natgas-logo-complete.png"
          class="img-logo-footer"
        />
      </a>
    </div>
  `,
})
export class NavBarBrandComponent {}
