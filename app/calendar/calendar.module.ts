/**
 * Created by amitthakkar on 12/11/16.
 */
import {NgModule}      from '@angular/core';
import {CommonModule}      from '@angular/common';
import {CalendarComponent}  from './calendar.component';
import {CalendarService} from "./calendar.service";
@NgModule({
    imports: [CommonModule],
    declarations: [CalendarComponent],
    providers: [CalendarService],
    exports: [CalendarComponent]
})
export class CalendarModule {
}
