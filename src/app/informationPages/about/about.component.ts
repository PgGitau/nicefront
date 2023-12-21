import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  //1st accordion input
  isShowContent = false;
  showContent() {
    this.isShowContent = !this.isShowContent
  }

  //2nd accordion input
  isShowContent2 = false;
  showContent2() {
    this.isShowContent2 = !this.isShowContent2
  }

  //3rd accordion input
  isShowContent3 = false;
  showContent3() {
    this.isShowContent3 = !this.isShowContent3
  }

  //4th accordion input
  isShowContent4 = false;
  showContent4() {
    this.isShowContent4 = !this.isShowContent4
  }

  //5th accordion input
  isShowContent5 = false;
  showContent5() {
    this.isShowContent5 = !this.isShowContent5
  }

  //6th accordion input
  isShowContent6 = false;
  showContent6() {
    this.isShowContent6 = !this.isShowContent6
  }

  //7th accordion input
  isShowContent7 = false;
  showContent7() {
    this.isShowContent7 = !this.isShowContent7
  }

  onLabelGroupClick($event: any){
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "LABEL" ) {

      let isCertainLabelAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainLabelAlreadyActive ) {
        isCertainLabelAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }

  }

  partnerData = [ 
    {
      id: 1,
      source: '../../../assets/img/partners/AFC.png'
    },

    {
      id: 2,
      source: '../../../assets/img/partners/Agrichem.png'
    },

    {
      id: 3,
      source: '../../../assets/img/partners/agrigreen.jpg'
    },

    {
      id: 4,
      source: '../../../assets/img/partners/aventua.png'
    },

    {
      id: 5,
      source: '../../../assets/img/partners/AWIC WEST.jpg'
    },

    {
      id: 6,
      source: '../../../assets/img/partners/AWIC.jpg'
    },

    {
      id: 7,
      source: '../../../assets/img/partners/Barichu.png'
    },

    {
      id: 8,
      source: '../../../assets/img/partners/Bayer.jpg'
    },

    {
      id: 9,
      source: '../../../assets/img/partners/Biashara.jpg'
    },

    {
      id: 10,
      source: '../../../assets/img/partners/Botachem.png'
    },
      
    {
      id: 11,
      source: '../../../assets/img/partners/brazafric.png'
    },

    {
      id: 12,
      source: '../../../assets/img/partners/cfao-logo.png'
    },

    {
      id: 13,
      source: '../../../assets/img/partners/CMC.png'
    },

    {
      id: 14,
      source: '../../../assets/img/partners/Coffee Agriworks.png'
    },

    {
      id: 15,
      source: '../../../assets/img/partners/Coffee Kenya.png'
    },

    {
      id: 16,
      source: '../../../assets/img/partners/Commodities.png'
    },

    {
      id: 17,
      source: '../../../assets/img/partners/Coopers.png'
    },

    {
      id: 18,
      source: '../../../assets/img/partners/cropnuts.jpg'
    },

    {
      id: 19,
      source: '../../../assets/img/partners/Croptech.jpg'
    },

    {
      id: 20,
      source: '../../../assets/img/partners/Cytonn.png'
    },

    {
      id: 21,
      source: '../../../assets/img/partners/Dekut.jpeg'
    },

    {
      id: 22,
      source: '../../../assets/img/partners/dexter.jpg'
    },

    {
      id: 23,
      source: '../../../assets/img/partners/EACCIA.jpg'
    },

    {
      id: 24,
      source: '../../../assets/img/partners/Elgon_new_logo.jpg'
    },

    {
      id: 25,
      source: '../../../assets/img/partners/Eurochem.png'
    },

    {
      id: 26,
      source: '../../../assets/img/partners/Fairtrade.png'
    },

    {
      id: 27,
      source: '../../../assets/img/partners/FEIL.png'
    },

    {
      id: 28,
      source: '../../../assets/img/partners/Greenlife.jpg'
    },

    {
      id: 29,
      source: '../../../assets/img/partners/grekkon.png'
    },

    {
      id: 30,
      source: '../../../assets/img/partners/highchem.png'
    },

    {
      id: 31,
      source: '../../../assets/img/partners/IMA Hassia India.jpg'
    },

    {
      id: 32,
      source: '../../../assets/img/partners/isuzu.png'
    },

    {
      id: 33,
      source: '../../../assets/img/partners/juanco.jpg'
    },

    {
      id: 34,
      source: '../../../assets/img/partners/KCCE.jpg'
    },

    {
      id: 35,
      source: '../../../assets/img/partners/Kenagro.jpg'
    },

    {
      id: 36,
      source: '../../../assets/img/partners/Keproba.jpeg'
    },

    {
      id: 37,
      source: '../../../assets/img/partners/KNCCI.jpg'
    },

    {
      id: 38,
      source: '../../../assets/img/partners/kofar.jpg'
    },

    {
      id: 39,
      source: '../../../assets/img/partners/Lentera.png'
    },

    {
      id: 40,
      source: '../../../assets/img/partners/linkage.png'
    },

    {
      id: 41,
      source: '../../../assets/img/partners/Marshall Fowler.png'
    },

    {
      id: 42,
      source: '../../../assets/img/partners/mascor+logo.jpg'
    },

    {
      id: 43,
      source: '../../../assets/img/partners/Mavuno.png'
    },

    {
      id: 44,
      source: '../../../assets/img/partners/Meru Union.jpg'
    },

    {
      id: 45,
      source: '../../../assets/img/partners/Mitchell Cotts.png'
    },

    {
      id: 46,
      source: '../../../assets/img/partners/Murphy.gif'
    },

    {
      id: 47,
      source: '../../../assets/img/partners/NCE.png'
    },

    {
      id: 48,
      source: '../../../assets/img/partners/nestle.jpg'
    },

    {
      id: 49,
      source: '../../../assets/img/partners/NKPCU.jpg'
    },

    {
      id: 50,
      source: '../../../assets/img/partners/Nyeri county gvt.png'
    },

    {
      id: 51,
      source: '../../../assets/img/partners/Osho.png'
    },

    {
      id: 52,
      source: '../../../assets/img/partners/Othaya.png'
    },

    {
      id: 53,
      source: '../../../assets/img/partners/Pan agric.png'
    },

    {
      id: 54,
      source: '../../../assets/img/partners/pioneer.png'
    },

    {
      id: 55,
      source: '../../../assets/img/partners/safaricom.png'
    },

    {
      id: 56,
      source: '../../../assets/img/partners/Shubhodaya - Soil  health.png'
    },

    {
      id: 57,
      source: '../../../assets/img/partners/soilcares.jpg'
    },

    {
      id: 58,
      source: '../../../assets/img/partners/tamarillo.png'
    },

    {
      id: 59,
      source: '../../../assets/img/partners/Tasha.jpg'
    },

    {
      id: 60,
      source: '../../../assets/img/partners/thika.png'
    },
    
    {
      id: 61,
      source: '../../../assets/img/partners/Toyota.png'
    }, 

    {
      id: 62,
      source: '../../../assets/img/partners/Tropical.png'
    }, 

    {
      id: 63,
      source: '../../../assets/img/partners/Wananchi.jpg'
    }, 

    {
      id: 64,
      source: '../../../assets/img/partners/yara.jpg'
    }, 

    {
      id: 65,
      source: '../../../assets/img/partners/zumpini copy.jpg'
    }, 
  ]

}
