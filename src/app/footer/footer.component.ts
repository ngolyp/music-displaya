import { Component, OnInit } from '@angular/core';
import { Ngoly } from '../ngoly';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login: Ngoly =
  { sid: 991506266, sname: 'Phu-Thien Peter Ngo-Ly',
  scampus: 'Trafalgar', slogin: 'ngoly', stitle: 'Assignment 3' };
  footer = "Peter Ngo-Ly, 2019"
}
