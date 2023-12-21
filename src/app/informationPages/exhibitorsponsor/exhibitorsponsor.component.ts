import { Component } from '@angular/core';

@Component({
  selector: 'app-exhibitorsponsor',
  templateUrl: './exhibitorsponsor.component.html',
  styleUrls: ['./exhibitorsponsor.component.css']
})
export class ExhibitorsponsorComponent {
  name:any;
  email: any;
  phone: any;
  company: any;
  designation: any;


  // exhibitorsponsor form tabs
  tabs: string [] = ['Sponsor', 'Exhibitor'];
  activatedTabIndex: number = 0;

  //exhibitorsponsor form tab index
  tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
  }
}
