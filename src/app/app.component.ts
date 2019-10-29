import { Component } from '@angular/core';
import { ExerciseCreateComponent } from './page/exercise-create/exercise-create.component';
import { SessionCreateComponent } from './page/session-create/session-create.component';
import { SessionListComponent } from './page/session-list/session-list.component';
import { OnsTab } from 'ngx-onsenui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  tab1 = SessionCreateComponent
  tab2 = ExerciseCreateComponent
  tab3 = SessionListComponent
}
