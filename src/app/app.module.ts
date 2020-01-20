import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodosListComponent } from './todo/todos-list/todos-list.component';
import { TodosItemComponent } from './todo/todos-item/todos-item.component';
import { TodosFooterComponent } from './todo/todos-footer/todos-footer.component';
import { TodosAddComponent } from './todo/todos-add/todos-add.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducers } from './app.reducers';
import { FilterPipe } from './filter/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodosListComponent,
    TodosItemComponent,
    TodosFooterComponent,
    TodosAddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
