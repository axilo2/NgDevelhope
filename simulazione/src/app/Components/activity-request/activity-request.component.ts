import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/Models/data';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-activity-request',
  templateUrl: './activity-request.component.html',
  styleUrls: ['./activity-request.component.css']
})
export class ActivityRequestComponent implements OnInit {

  prop: IData[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.data.getAllData().subscribe(data => 
      console.log(data)
    );
  }


}
