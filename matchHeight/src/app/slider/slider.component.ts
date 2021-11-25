import { Component, OnInit,ViewChild  } from '@angular/core';
import { SlickCarouselComponent } from "ngx-slick-carousel";
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @ViewChild('carousel') slickModal: SlickCarouselComponent;

  slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'}
  ];

  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
         breakpoint: 767,
         settings: 'unslick'
      }
   ]
  };

  constructor() {
    this.getScreenSize();

   }

  ngOnInit(): void {
    
  }
  @HostListener("window:resize", ["$event"])
  getScreenSize(event?) {
    if (this.slickModal !== undefined) {
       if (window.innerWidth < 768) {
         if (!this.slickModal.initialized) {
           this.slickModal.initSlick();
         }
       } else if (this.slickModal.initialized) {
         this.slickModal.unslick();
       }
    }
  }
  
}
