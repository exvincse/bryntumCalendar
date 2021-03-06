import { Component } from '@angular/core';
import { Store, StoreConfig, ModelConfig, DateHelper, StringHelper } from '@bryntum/calendar/calendar.lite.umd.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'calendar';
    tbarConfig = {};
    resources = [
        {
            "id": "r1",
            "name": "Mike",
            "image": "mike.jpg",
            "eventColor": "blue"
        },
        {
            "id": "r2",
            "name": "Celia",
            "image": "celia.jpg",
            "eventColor": "red"
        },
        {
            "id": "r3",
            "name": "Lee",
            "image": "lee.jpg",
            "eventColor": "orange"
        },
        {
            "id": "r4",
            "name": "Emilia",
            "image": "emilia.jpg",
            "eventColor": "gray"
        },
        {
            "id": "r5",
            "name": "Dan",
            "image": "dan.jpg",
            "eventColor": "green"
        },
        {
            "id": "r6",
            "name": "Mark",
            "image": "mark.jpg",
            "eventColor": "purple"
        },
        {
            "id": "r7",
            "name": "Rob",
            "image": "rob.jpg",
            "eventColor": "black"
        },
        {
            "id": "r8",
            "name": "Steve",
            "image": "steve.jpg",
            "eventColor": "pink"
        },
        {
            "id": "r9",
            "name": "Malik",
            "image": "malik.jpg",
            "eventColor": "violet"
        },
        {
            "id": "r10",
            "name": "Georg",
            "image": "George.jpg",
            "eventColor": "teal"
        }
    ];
    events = [
        {
            "id": 1,
            "resourceId": "r1",
            "startDate": "2020-01-01 10:00",
            "duration": 2,
            "durationUnit": "h",
            "name": "Review website",
            "note": "<a href='//www.google.com' target='_blank'>Link to website</a>",
            "iconCls": "b-fa b-fa-mouse-pointer"
        },
        {
            "id": 2,
            "resourceId": "r2",
            "startDate": "2020-01-02 12:00",
            "duration": 1.5,
            "durationUnit": "h",
            "name": "Bryntum onsite meeting",
            "note": "<a href='https://www.google.se/maps/place/Bryntum/@59.3340293,18.0662579,15z/data=!4m2!3m1!1s0x0:0xc76e8fef322e5c57?ved=2ahUKEwiche7e0aveAhXRh6YKHUoLDvcQ_BIwDXoECAcQCw' target='_blank'><i style='margin-right:5px' class='b-fa b-fa-globe'></i>Map link</a>",
            "iconCls": "b-fa b-fa-arrows-alt"
        },
        {
            "id": 3,
            "resourceId": "r3",
            "startDate": "2020-01-03 14:00",
            "duration": 2,
            "durationUnit": "h",
            "name": "Walk the dog",
            "note": "Don't forget to bring waste bags. Or the dog.",
            "image": "resources/dog.jpg",
            "eventColor": "purple",
            "iconCls": "b-fa b-fa-dog"
        },
        {
            "id": 4,
            "resourceId": "r4",
            "startDate": "2020-01-04 08:00",
            "duration": 3,
            "durationUnit": "h",
            "name": "Go for cold swim",
            "image": "resources/lake.jpg",
            "iconCls": "b-fa b-fa-swimmer"
        },
        {
            "id": 5,
            "resourceId": "r5",
            "startDate": "2020-01-01 15:00",
            "duration": 2,
            "durationUnit": "h",
            "name": "Dentist appointment",
            "iconCls": "b-fa b-fa-arrows-alt-h"
        },
        {
            "id": 6,
            "resourceId": "r6",
            "startDate": "2020-01-02 16:00",
            "duration": 3,
            "durationUnit": "h",
            "name": "Important meeting",
            "iconCls": "b-fa b-fa-exclamation-triangle",
            "eventColor": "red"
        },
        {
            "id": 7,
            "resourceId": "r6",
            "startDate": "2020-01-03 06:00",
            "duration": 2,
            "durationUnit": "h",
            "name": "Pick up client from airport",
            "iconCls": "b-fa b-fa-plane"
        },
        {
            "id": 8,
            "resourceId": "r7",
            "startDate": "1960-01-04 09:00",
            "duration": 2,
            "durationUnit": "h",
            "name": "Dad's birthday",
            "iconCls": "b-fa b-fa-birthday-cake",
            "allDay": true,
            "recurrenceRule": "FREQ=YEARLY"
        }
    ];
    eventTooltip = {
        // Configuration options are passed on to the tooltip instance.
        // Override the default which is to show on click.
        showOn: 'hover',
        // We want the tooltip's left edge aligned to the right edge of the event if possible.
        align: 'l-r',
        // Mustn't shrink because of large, graphical content
        minWidth: null,
        renderer: (data: { eventRecord: { resource: { get: (arg0: string) => any; name: string; }; startDate: Date; endDate: Date; get: (arg0: string) => any; note: string; }; }) =>
            `<dl>
            <dt>Assigned to:</dt>
            <dd>
                ${data.eventRecord.resource.get('image') ? `<img class="resource-image" src="../_shared/images/users/${data.eventRecord.resource.get('image')}"/>` : ''}
                ${StringHelper.encodeHtml(data.eventRecord.resource.name)}
            </dd>
            <dt>Time:</dt>
            <dd>
                ${DateHelper.format(data.eventRecord.startDate, 'LT')} - ${DateHelper.format(data.eventRecord.endDate, 'LT')}
            </dd>
            ${data.eventRecord.get('note') ? `<dt>Note:</dt><dd>${StringHelper.encodeHtml(data.eventRecord.note)}</dd>` : ''}

            ${data.eventRecord.get('image') ? `<dt>Image:</dt><dd><img class="image" src="${data.eventRecord.get('image')}"/></dd>` : ''}
        </dl>`,

        onBeforeShow() {
            // Delete tool hidden for recurring occurrences
            // this.tools.delete.hidden = this.eventRecord.isOccurrence;
        }

    }
}
