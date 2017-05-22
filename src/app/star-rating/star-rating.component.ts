import { Component, Input, OnChanges } from '@angular/core';


@Component({
  moduleId: module.id,
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  selector: 'rating'
})
export class StarRating implements OnChanges {
  @Input() max: number;
  @Input() value: number;
  width: number;
  fullWidth: number;

  displayStars() :number[] {
    let stars= [];
    for(let i = 0; i < this.max; i++) {
      stars.push(i);
    }
    return stars;
  }

  ngOnChanges() :void {
    this.fullWidth = this.max * 24;
    this.width = this.value * 24;
  }
}
