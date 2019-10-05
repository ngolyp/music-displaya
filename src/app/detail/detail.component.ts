import { Component, OnInit } from '@angular/core';
import {MYSONGS} from '../../assets/data/mySongs'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
mysongs = MYSONGS;
song;
goodToGo;
temp;
onClickMe(i): void {
  if (this.song === this.mysongs[i]) {
    this.song = null;
    this.goodToGo=false;
  }
  else {
  this.goodToGo=true;
  this.temp=i;
  // console.log(this.temp);
  this.song = this.mysongs[i];
  }
};
}

