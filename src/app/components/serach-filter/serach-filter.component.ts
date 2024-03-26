import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-serach-filter',
  standalone: true,
  imports: [IconFieldModule, InputIconModule],
  templateUrl: './serach-filter.component.html',
  styleUrl: './serach-filter.component.css'
})
export class SerachFilterComponent {

}
