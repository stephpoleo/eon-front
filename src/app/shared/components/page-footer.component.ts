import { Component } from '@angular/core';
import { Auth0ResourceModel } from '@app/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="page-footer">
      <div class="page-footer-grid">
        <div class="page-footer-grid__info">
          <div class="page-footer-info__message">
            <p class="text-default landing-text-p">
              Eon es una iniciativa más de
              <img
                alt="Eon logo"
                src="https://storage.googleapis.com/assets-origenes/images/natgas-logo-complete.png"
                class="img-logo-footer"
              />
            </p>
          </div>
        </div>
        <div class="page-footer-grid__brand">
          <div class="page-footer-brand">
            <p class="copyright text-center">
              &copy; {{ date | date: 'yyyy' }}, NatDev
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class PageFooterComponent {
  date: Date = new Date();
  resourceList: Auth0ResourceModel[] = [
    {
      path: 'https://auth0.com/why-auth0/',
      label: 'Why Auth0',
    },
    {
      path: 'https://auth0.com/docs/get-started',
      label: 'How It Works',
    },
    {
      path: 'https://auth0.com/blog/developers/',
      label: 'Developer Blog',
    },
    {
      path: 'https://auth0.com/contact-us',
      label: 'Contact an Expert',
    },
  ];
}
