import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component'; 
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { AuthService } from 'src/app/Auth/auth.service';
import { Router } from '@angular/router';
import { FarmerSignUpComponent } from 'src/app/sign-up/farmer-sign-up/farmer-sign-up.component';
import { AddtocartComponent } from 'src/app/addtocart/addtocart.component';


@Component({
  selector: 'app-nicehomepage',
  templateUrl: './nicehomepage.component.html',
  styleUrls: ['./nicehomepage.component.css']
})
export class NicehomepageComponent implements OnInit {

  number_value:any;
  number_value2:any;
  isShowDiv = false;
  isShowDiv2 = false;
  

  //roasted
  check(value: any) {
    this.number_value = value.target.value;
  }

  //green
  check2(value: any) {
    this.number_value2 = value.target.value;
  }

  // modal
  isModalOpen = false;
  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
    this.number_value = 1;
    this.number_value2 = 1;
  }

  // product form tabs
  tabs: string [] = ['Roasted', 'Green'];
  activatedTabIndex: number = 0;

  // tabbed-info tabs
  tabs2: string [] = ['Seller Info', 'Reviews'];
  activatedTabIndex2: number = 0;

  coffeeData = [ 
    {
      id: 1,
      imageUrl: '../../assets/img/packaging/pkg7.jpg',
      sticker: true,
      farmer: 'Riakiania Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star',
      ],
      productName: 'AA Coffee',
      newPrice: '78',
      oldPrice: '90',
      discountPercentage: '7'
    },

    {
      id: 2,
      imageUrl: '../../assets/img/packaging/pkg8.jpg',
      sticker: true,
      farmer: 'Kiaragana Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star',
        'bi bi-star',
      ],
      productName: 'AB Coffee',
      newPrice: '80',
      oldPrice: '90',
      discountPercentage: '5'
    },

    {
      id: 3,
      imageUrl: '../../assets/img/coffee-04.jpg',
      sticker: true,
      farmer: 'Kaga Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'PB Coffee',
      newPrice: '70',
      oldPrice: '100',
      discountPercentage: '10'
    },

    {
      id: 4,
      imageUrl: '../../assets/img/packaging/pkg1.jpg',
      sticker: true,
      farmer: 'Kiambwe Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star',
        'bi bi-star',
      ],
      productName: 'TT Coffee',
      newPrice: '50',
      oldPrice: '80',
      discountPercentage: '10'
    },

    {
      id: 5,
      imageUrl: '../../assets/img/packaging/pkg10.jpg',
      sticker: true,
      farmer: 'Mitondo Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'AA Coffee',
      newPrice: '70',
      oldPrice: '100',
      discountPercentage: '15'
    },

    {
      id: 6,
      imageUrl: '../../assets/img/coffee-bag-02.jpg',
      sticker: true,
      farmer: 'Gathambi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star',
      ],
      productName: 'T Coffee',
      newPrice: '80',
      oldPrice: '90',
      discountPercentage: '7'
    },

    {
      id: 7,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
      sticker: true,
      farmer: 'Ihara Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star',
        'bi bi-star',
      ],
      productName: 'AA Coffee',
      newPrice: '70',
      oldPrice: '90',
      discountPercentage: '10'
    },

    {
      id: 8,
      imageUrl: '../../assets/img/packaging/pkg9.jpg',      
      sticker: true,
      farmer: 'Getuya Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star',
      ],
      productName: 'PB Coffee',
      newPrice: '78',
      oldPrice: '90',
      discountPercentage: '7'
    },

    {
      id: 9,
      imageUrl: '../../assets/img/coffee-bag-01.jpg',
      sticker: true,
      farmer: 'Ikuni Coffee Factory',
      rating:  [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'AB Coffee',
      newPrice: '80',
      oldPrice: '90',
      discountPercentage: '10'
    },

    {
      id: 10,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
      sticker: true,
      farmer: 'Zambezi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'TT Coffee',
      newPrice: '78',
      oldPrice: '90',
      discountPercentage: '7'
    },
  ]

  myScriptElement: HTMLScriptElement;
   constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router){
      this.myScriptElement = document.createElement("script");
      this.myScriptElement.src = "./assets/js/main.js";
      document.body.appendChild(this.myScriptElement);
   }

   user:any | null = null;
   isLoggedIn:any

   showLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '25pc',
      maxHeight: '90vh'
    });
  }

  logout(){
    this.service.logout()
    this.ngOnInit()
  }

  showSignUpDialog(){
    const dialogRef = this.dialog.open(SignUpComponent,{
      width: '25pc',
      maxHeight: '100vh'
    }); 
  }
  showFarmerSignUpDialog(){
    const dialogRef = this.dialog.open(FarmerSignUpComponent,{
      width: '25pc',
      maxHeight: '100vh'
    }); 
  }

  showAddtocartDialog(enterAnimationDuration: string, exitAnimationDuration: string){
    const dialogRef = this.dialog.open(AddtocartComponent,{
      minWidth: '250px',
      maxHeight: '100vh',
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

  ngOnInit(): void {
   }

   //product form tab index
  tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
  }

  // detailedtabs tab index
  tabChange2(tabIndex: number) {
    this.activatedTabIndex2 = tabIndex;
  }

  // for roasted section
  toggleDivOff() {
    this.isShowDiv = false;
  }

  toggleDivOn() {
    this.isShowDiv = true;
  }

  // for green tab section
  toggleDivOff2() {
    this.isShowDiv2 = false;
  }

  toggleDivOn2() {
    this.isShowDiv2 = true;
  }

  // increment button for roasted section
  increment(){
    this.number_value++;
    }
    
  //decrements item for roasted section
  decrement(){
    if(this.number_value-1 < 1){
      this.number_value = 1;
    }
    else{
      this.number_value -= 1;
    }
  }

  // increment button for green section
  increment2(){
    this.number_value2++;
    }
    
  //decrements item for green section
  decrement2(){
    if(this.number_value2-1 < 1){
      this.number_value2 = 1;
    }
    else{
      this.number_value2 -= 1;
    }
  }
}

