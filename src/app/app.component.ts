import { Component } from '@angular/core';
import { NavigationService } from './modules/core/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Pakerek-frontend';

  constructor(public navigation: NavigationService) {
    this.navigation.startSaveHistory();
  }
}
