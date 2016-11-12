/**
 * Created by amitthakkar on 12/11/16.
 */
import {NgModule}      from '@angular/core';
import {CalendarComponent}  from './calendar.component';
@NgModule({
    declarations: [CalendarComponent],
    exports: [CalendarComponent]
})
export class CalendarModule {
}
