import { Component } from '@angular/core';
import { SharedService } from '../shared/sharedService';

@Component({
    template: `
        <h3>New Schedule</h3>
    `,
    providers: [SharedService]
})
export class AddSchedule{
    name: string;
    
    constructor(private _service: SharedService) {
        console.log('here');
        this._service.scheduleEvent.subscribe((movie) => {
            console.log(movie);
        });
    }
}