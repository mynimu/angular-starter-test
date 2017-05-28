/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
//  styleUrls: [
//    './app.component.css'
//  ],
  template: `

  <!--Details for components see: http://valor-software.com/ngx-bootstrap/index-bs4.html#/ -->
    

    <div class="btn-group" dropdown>
      <button dropdownToggle type="button" class="btn btn-primary dropdown-toggle">
        Button dropdown 
      </button>
      <ul *dropdownMenu class="dropdown-menu" role="menu">
        <li role="menuitem"><a class="dropdown-item" href="#" 
        [routerLink]=" ['./home'] " >Home</a></li>
        <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
        <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
        <li class="divider dropdown-divider"></li>
        <li role="menuitem"><a class="dropdown-item" [routerLink]=" ['./about'] ">About</a>
        </li>
      </ul>
    </div>




<br/>


    <tabset [justified]="true">
      <tab heading="Justified">Justified content</tab>
      <tab heading="SJ">Short Labeled Justified content</tab>
      <tab heading="Long Justified">Long Labeled Justified content</tab>
    </tabset>



<br/>
<br/>

    <nav>
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Index
      </a>
      <a [routerLink]=" ['./home'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Home
      </a>
      <a [routerLink]=" ['./detail'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Detail
      </a>
      <a [routerLink]=" ['./barrel'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Barrel
      </a>
      <a [routerLink]=" ['./about'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        About
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer><!--
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>-->
    </footer>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
