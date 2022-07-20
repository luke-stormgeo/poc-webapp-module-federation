// angular / external imports
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MatButtonToggleChange,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { Observable, map, of } from 'rxjs';
import { faMoon, faSun } from '@fortawesome/pro-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  // redeclare vars for template
  readonly faMoon: IconDefinition = faMoon;
  readonly faSun: IconDefinition = faSun;

  //@Select(UserState.theme) theme$: Observable<Theme>;
  theme$: Observable<string> = of('light');
  @ViewChild(MatButtonToggleGroup) themeGroup: MatButtonToggleGroup;

  date: Date = new Date();

  //constructor(private _store: Store) {
  constructor() {
    setInterval(this._updateDate.bind(this), 1000);
  }

  toggleTheme(event: MatButtonToggleChange): void {
    //this._store.dispatch(new User.ChangeTheme(event.value));
  }

  private _updateDate(): void {
    this.date = new Date();
  }
}
