import { Component, OnInit } from '@angular/core';
import { Ngoly } from '../ngoly';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login: Ngoly =
  { sid: 991506266, sname: 'Phu-Thien Peter Ngo-Ly',
  scampus: 'Trafalgar', slogin: 'ngoly', stitle: 'Assignment 3' };
  title: string = 'Mu$ic Di$playa'
}
