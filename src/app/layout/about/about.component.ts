import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { AboutComponentComponent } from '../../components/about-component/about-component.component';
import { BtnAboutComponent } from '../../components/btn-about/btn-about.component';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { BtnNextSwiperComponent } from '../../components/btn-next-swiper/btn-next-swiper.component';
import { BtnPrevSwiperComponent } from '../../components/btn-prev-swiper/btn-prev-swiper.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutComponentComponent, BtnAboutComponent,BtnNextSwiperComponent, BtnPrevSwiperComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutComponent implements OnInit {
  swiperElement = signal<SwiperContainer | null>(null)
  ngOnInit(): void {
      const swiperElemConstructor = document.querySelector('.swiper-about')
      const swiperOptions: SwiperOptions = {
          slidesPerView: 1,
          pagination: false,
          breakpoints: {},
          parallax: true,
          navigation: {
              enabled: true,
              nextEl: '.swiper-button-next-about',
              prevEl: '.swiper-button-prev-about',
          },
      }
      Object.assign(swiperElemConstructor!, swiperOptions)
      this.swiperElement.set(swiperElemConstructor as SwiperContainer)
      this.swiperElement()?.initialize()
  }
}
