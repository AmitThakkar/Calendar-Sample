/**
 * Created by amitthakkar on 12/11/16.
 */
import {Component} from '@angular/core';
import {CalendarService} from "./calendar.service";
@Component({
    selector: 'calendar',
    moduleId: module.id,
    templateUrl: './calendar.html',
    styleUrls: ['calendar.css']
})
export class CalendarComponent {
    constructor(private calendarService:CalendarService) {
    }

    meetings = this.calendarService.getMeetingsWithPositions();
}
