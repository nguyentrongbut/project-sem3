import { SwiperOptions } from 'swiper/types'
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core'
import { SwiperContainer } from 'swiper/element'

@Component({
    selector: 'app-home-project',
    standalone: true,
    imports: [],
    templateUrl: './home-project.component.html',
    styleUrl: './home-project.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeProjectComponent implements OnInit {
    swiperElement = signal<SwiperContainer | null>(null)
    ngOnInit(): void {
        const swiperElemConstructor = document.querySelector('.swiper-project')
        const swiperOptions: SwiperOptions = {
            slidesPerView: 4,
            spaceBetween: 24,
            pagination: false,
            breakpoints: {},
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next-project',
                prevEl: '.swiper-button-prev-project',
            },
        }
        Object.assign(swiperElemConstructor!, swiperOptions)
        this.swiperElement.set(swiperElemConstructor as SwiperContainer)
        this.swiperElement()?.initialize()
    }
}
