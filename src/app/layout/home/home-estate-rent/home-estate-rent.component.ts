import { SwiperOptions } from 'swiper/types'
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core'
import { SwiperContainer } from 'swiper/element'
import { BtnNextSwiperComponent } from '../../../components/btn-next-swiper/btn-next-swiper.component'
import { BtnPrevSwiperComponent } from '../../../components/btn-prev-swiper/btn-prev-swiper.component'

@Component({
    selector: 'app-home-estate-rent',
    standalone: true,
    imports: [BtnNextSwiperComponent, BtnPrevSwiperComponent],
    templateUrl: './home-estate-rent.component.html',
    styleUrl: './home-estate-rent.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeEstateRentComponent implements OnInit {
    swiperElement = signal<SwiperContainer | null>(null)
    ngOnInit(): void {
        const swiperElemConstructor = document.querySelector('.swiper-rent')
        const swiperOptions: SwiperOptions = {
            slidesPerView: 3,
            spaceBetween: 24,
            pagination: false,
            breakpoints: {},
            parallax: true,
            autoplay: true,
            loop: true,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next-rent',
                prevEl: '.swiper-button-prev-rent',
            },
        }
        Object.assign(swiperElemConstructor!, swiperOptions)
        this.swiperElement.set(swiperElemConstructor as SwiperContainer)
        this.swiperElement()?.initialize()
    }
}
