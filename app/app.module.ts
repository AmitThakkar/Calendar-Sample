/**
 * Created by amitthakkar on 12/11/16.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {CalendarModule} from "./calendar/calendar.module";
@NgModule({
    imports: [BrowserModule, CalendarModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
