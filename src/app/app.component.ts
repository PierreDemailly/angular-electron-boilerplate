/* eslint-disable require-jsdoc */
import {Component} from '@angular/core';
import {log} from '@pierred/git-commander';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-electron-boilerplate';

  constructor() {
    this.init();
  }

  async init() {
    const e = await log();
    console.log(e);
  }
}
