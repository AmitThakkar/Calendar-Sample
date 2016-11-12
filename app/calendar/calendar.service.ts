/**
 * Created by amitthakkar on 12/11/16.
 */
import {Injectable} from "@angular/core";

const MAX_WIDTH = 600;

@Injectable()
export class CalendarService {
    getMeetings() {
        return [
            {id: 1, start: 0, end: 60},
            {id: 2, start: 30, end: 90},
            {id: 3, start: 120, end: 150},
            {id: 4, start: 150, end: 210},
            {id: 5, start: 210, end: 270},
            {id: 6, start: 180, end: 240},
            {id: 7, start: 270, end: 330},
            {id: 8, start: 190, end: 230},
            {id: 9, start: 390, end: 540},
            {id: 10, start: 550, end: 610},
            {id: 11, start: 660, end: 720},
            {id: 12, start: 510, end: 540},
            {id: 13, start: 390, end: 510},
            {id: 14, start: 420, end: 520},
            {id: 15, start: 580, end: 620},
            {id: 16, start: 600, end: 640}
        ];
    }

    getMeetingsWithPositions() {
        let meetingsWithCssAttributes = [];
        let conflicts = {};
        let meetingsLeft = {};
        let meetings = this.getMeetings();
        meetings.forEach((meeting) => {
            let left = 0;
            for (let start = meeting.start; start < meeting.end; start++) {
                conflicts[start] ? conflicts[start]++ : conflicts[start] = 1;
                if (conflicts[start] > left + 1) {
                    left = conflicts[start] - 1;
                }
            }
            meetingsLeft[meeting.id] = left;
        });
        meetings.forEach((meeting) => {
            let maxConflictMeeting = 1;
            for (let start = meeting.start; start < meeting.end; start++) {
                if (conflicts[start] > maxConflictMeeting) {
                    maxConflictMeeting = conflicts[start];
                }
            }
            meetingsWithCssAttributes.push({
                id: meeting.id,
                width: MAX_WIDTH / maxConflictMeeting,
                top: meeting.start * 2,
                height: (meeting.end * 2) - (meeting.start * 2),
                left: meetingsLeft[meeting.id] * MAX_WIDTH / maxConflictMeeting
            });
        });
        return meetingsWithCssAttributes;
    }
}
