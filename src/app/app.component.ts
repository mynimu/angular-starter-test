/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { Http } from '@angular/http';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
   styleUrls: [
     './app.component.css'
   ],
  template: `
<md-toolbar color="primary">

    <span>MyCompany</span>
    <span class="example-spacer"></span>
    <button md-button [mdMenuTriggerFor]="appMenu"><md-icon>menu</md-icon> Menu</button>
    
</md-toolbar>

<md-menu #appMenu="mdMenu">
  <button md-menu-item [routerLink]=" ['./home'] " > Home </button>
  <button md-menu-item [routerLink]=" ['./about'] " >About</button> 
</md-menu>


<md-menu class="pull-right" md-align-trigger md-direction="bottom left">
  <button md-menu-trigger>
  <md-icon>account_circle</md-icon> Kira San</button> 
  <span [routerLink]=" ['./about'] " ></span> 
</md-menu>
<ul>
  <li *ngFor="let user of myData">{{user.name}}</li>
</ul>
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

    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';
  public myData: Array<any>;

  constructor(
    public appState: AppState, private http: Http
  ) {

    this.http.get('https://jsonplaceholder.typicode.com/users')
      .map((response) => response.json())
      .subscribe((res) => this.myData = res);

  }

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
