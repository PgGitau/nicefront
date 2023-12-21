import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service'; 
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { AuthService } from 'src/app/Auth/auth.service';
import { interval, Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { SponsorshipComponent } from '../sponsorship/sponsorship.component';
import { ExhibitorsComponent } from '../exhibitors/exhibitors.component';
import { ExhibitorsponsorComponent } from '../exhibitorsponsor/exhibitorsponsor.component';

interface timeComponents {
  secondsToDday: number;
  minutesToDday: number;
  hoursToDday: number;
  daysToDday: number;
}

function calcDateDiff(endDay: Date = new Date(2024, 10, 13)): timeComponents {
  const dDay = endDay.valueOf();

  const milliSecondsInASecond = 1000;
  const hoursInADay = 24;
  const minutesInAnHour = 60;
  const secondsInAMinute = 60;

  const timeDifference = dDay - Date.now();

  const daysToDday = Math.floor(
    timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
  );

  const hoursToDday = Math.floor(
    (timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay
  );

  const minutesToDday = Math.floor(
    (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
  );

  const secondsToDday =
    Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

  return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
}
@Component({
  selector: 'app-expo',
  templateUrl: './expo.component.html',
  styleUrls: ['./expo.component.css']
})

export class ExpoComponent implements OnInit {

  myScriptElement: HTMLScriptElement;
  constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "./assets/js/main.js";
     document.body.appendChild(this.myScriptElement);

     this.timeLeft$ = interval(1000).pipe(
      map(x => calcDateDiff()),
      shareReplay(1)
    );
  }

  public timeLeft$: Observable<timeComponents>;

  user:any | null = null;
  isLoggedIn:any

  showLoginDialog(){
   const dialogRef = this.dialog.open(LoginComponent,{
     width: '25pc'
   });
  }

 logout(){
   this.service.logout()
   this.ngOnInit()
 }

 showSignUpDialog(){
   const dialogRef = this.dialog.open(SignUpComponent,{
     width: '25pc'
   }); 
 }

 showSponsorDialog(sponsorType: any){
  if (sponsorType == 'platinum') {
    let dialogRef = this.dialog.open(SponsorshipComponent,{
      width: '25pc',
      maxHeight: '90vh',
      data: {
        sponsor: sponsorType
      }
    })
  }
  else if (sponsorType == 'gold') {
    let dialogRef = this.dialog.open(SponsorshipComponent,{
      width: '25pc',
      maxHeight: '90vh',
      data: {
        sponsor: sponsorType
      }
    })
  }
  else if (sponsorType == 'silver') {
    let dialogRef = this.dialog.open(SponsorshipComponent,{
      width: '25pc',
      maxHeight: '90vh',
      data: {
        sponsor: sponsorType
      }
    })
  }
  else {
    sponsorType == 'prize'
    let dialogRef = this.dialog.open(SponsorshipComponent,{
      width: '25pc',
      maxHeight: '90vh',
      data: {
        sponsor: sponsorType
      }
    })
  }
 }

 showExhibitorDialog() {
  let dialogRef = this.dialog.open(ExhibitorsComponent,{
    width: '25pc',
    maxHeight: '90vh',
  })
 }

 showRegisterDialog() {
  let dialogRef = this.dialog.open(ExhibitorsponsorComponent,{
    width: '25pc',
    maxHeight: '90vh',
  })
 }

 ngOnInit(): void {
  }
}
