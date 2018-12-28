import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { APPROUTING } from './app.routes';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    NgDatepickerModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
