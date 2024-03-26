import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-home-header',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './home-header.component.html',
    styleUrl: './home-header.component.css',
})
export class HomeHeaderComponent {
    selectedElement: string = 'element1'

    selectElement(element: string) {
        this.selectedElement = element
    }
}
