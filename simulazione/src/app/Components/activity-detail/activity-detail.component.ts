import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  title: string = 'titolo';

  constructor() { }

  ngOnInit(): void {
  }

}
