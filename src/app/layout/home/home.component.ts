import { Component } from '@angular/core'
import { HomeSearchFilterComponent } from './home-search-filter/home-search-filter.component'
import { HomeAboutComponent } from './home-about/home-about.component'
import { HomeProjectComponent } from './home-project/home-project.component'
import { HomeEstateRentComponent } from './home-estate-rent/home-estate-rent.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HomeSearchFilterComponent, HomeAboutComponent, HomeProjectComponent, HomeEstateRentComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {}
