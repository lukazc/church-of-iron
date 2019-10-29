import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OnsenModule } from 'ngx-onsenui';
import { SessionListComponent } from './page/session-list/session-list.component';
import { ExerciseCreateComponent } from './page/exercise-create/exercise-create.component';
import { SessionCreateComponent } from './page/session-create/session-create.component';


@NgModule({
  declarations: [
    AppComponent,
    SessionListComponent,
    ExerciseCreateComponent,
    SessionCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnsenModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SessionListComponent,
    ExerciseCreateComponent,
    SessionCreateComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
