import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-home-search-filter',
  standalone: true,
  imports: [IconFieldModule, InputIconModule],
  templateUrl: './home-search-filter.component.html',
  styleUrl: './home-search-filter.component.css'
})
export class HomeSearchFilterComponent {

}
