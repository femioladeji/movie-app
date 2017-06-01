import { Component, OnChanges, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './analogue-clock.html',
  selector: 'clock',
  styleUrls: ['./analogue-clock.css']
})

export class AnalogueClock implements OnChanges {
  startingPoint: number = 50;
  @Input() time: string;
  @Input() radius: number;
  x2: number;
  y2: number;
  mx2: number;
  my2: number;

  ngOnChanges(): void {
    const hourHand = this.radius / 1.8;
    const minuteHand = this.radius / 1.2;
    const { hour, minute } = this.calculateAngle(this.time);
    this.x2 = this.startingPoint + (hourHand * Math.cos(this.toDegrees(hour)));
    this.y2 = this.startingPoint + (hourHand * Math.sin(this.toDegrees(hour)));
    this.mx2 = this.startingPoint + (minuteHand * Math.cos(this.toDegrees(minute)));
    this.my2 = this.startingPoint + (minuteHand * Math.sin(this.toDegrees(minute)));
  }

  toDegrees(angle): number {
    return angle/180*Math.PI;
  }

  calculateAngle(time: string) {
    const timeDetails = time.split(':');
    const hour = parseInt(timeDetails[0]) % 12;
    let minute = (parseInt(timeDetails[1]) / 60) * 360;
    let hourAngle = (hour / 12) * 360 + ((minute / 360) * 30);
    hourAngle = (hourAngle <= 90) ? hourAngle + 270 : hourAngle - 90;
    minute = (minute <= 90) ? minute + 270 : minute - 90;
    return { hour: hourAngle, minute };
  }
}
