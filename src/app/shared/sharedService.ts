import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class SharedService{
    scheduleEvent: EventEmitter<any> = new EventEmitter;
}