import { Component } from '@angular/core'
import { HomeSearchFilterComponent } from './home-search-filter/home-search-filter.component'
import { HomeAboutComponent } from './home-about/home-about.component'
import { HomeProjectComponent } from './home-project/home-project.component'
import { HomeEstateRentComponent } from './home-estate-rent/home-estate-rent.component'
import { HomeEstateSaleComponent } from './home-estate-sale/home-estate-sale.component'
import { HomeDetailComponent } from './home-detail/home-detail.component'
import { HomeInfoComponent } from './home-info/home-info.component'
import { HomeHeaderComponent } from './home-header/home-header.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HomeSearchFilterComponent, HomeAboutComponent, HomeProjectComponent, HomeEstateRentComponent, HomeEstateSaleComponent, HomeDetailComponent, HomeInfoComponent, HomeHeaderComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {}
