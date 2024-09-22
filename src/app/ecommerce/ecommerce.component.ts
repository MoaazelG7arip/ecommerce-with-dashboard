import { Component, inject} from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css'
})
export class EcommerceComponent {

  router: Router = inject(Router)
  ngOnInit(): void {
    let overlay = document.querySelector('.over-lay');
    this.router.events.subscribe((eventNavigation) => {
      if (eventNavigation instanceof NavigationStart) {
        overlay.classList.remove('d-none');
        overlay.classList.add('d-block');
      } else if (
        eventNavigation instanceof NavigationEnd ||
        eventNavigation instanceof NavigationCancel ||
        eventNavigation instanceof NavigationError
      ) {
        overlay.classList.remove('d-block');
        overlay.classList.add('d-none');
      }
    });
  }
}
