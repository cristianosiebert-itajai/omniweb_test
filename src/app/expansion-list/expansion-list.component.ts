import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'expansion-list',
  templateUrl: './expansion-list.component.html',
  styleUrls: ['./expansion-list.component.css']
})
export class ExpansionListComponent implements OnInit {

  @Input() movie: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.movie);
  }

}
