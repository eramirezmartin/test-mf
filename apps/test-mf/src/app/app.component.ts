import { Component } from '@angular/core';
import { UserService } from '@test-mf/core-lib';

@Component({
  selector: 'test-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-mf';

  constructor(private userService: UserService) {
    console.info('constructor APP', __webpack_public_path__);
    this.userService.setUsers();
  }
}
