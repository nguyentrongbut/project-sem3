import { Component } from '@angular/core';
import { HomeSearchFilterComponent } from './home-search-filter/home-search-filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSearchFilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
