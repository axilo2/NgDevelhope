import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  title: string = 'titolo';
  img: string = 'simulazione/src/assets/mortarboard.png'

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

}
