import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'timeTransformer'
})
export class TimeTransform implements PipeTransform{
    transform(timeMinutes: string): string {
        const inMinutes: number = parseInt(timeMinutes);
        const hours: number = Math.floor(inMinutes/60);
        const minutes: number = inMinutes % 60;
        let returnText: string = (hours >= 1) ? hours + ((hours === 1) ? ' hour ' : ' hours ') : '';
        returnText += `${minutes} minutes`;
        return returnText;
    }
}