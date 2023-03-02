import { Component } from '@angular/core';
import { Carousel } from "flowbite";
import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  imageObject = [
    {
      image: '../../../assets/images/main/carousel1.png',
      thumbImage: '../../../assets/images/main/carousel1.png'
    },
    {
      image: '../../../assets/images/main/carousel2.png',
      thumbImage: '../../../assets/images/main/carousel2.png'
    },
    {
      image: '../../../assets/images/main/carousel3.png',
      thumbImage: '../../../assets/images/main/carousel3.png'
    },
    {
      image: '../../../assets/images/main/carousel4.png',
      thumbImage: '../../../assets/images/main/carousel4.png'
    }
  ];
}
