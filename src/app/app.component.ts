import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { UserFormComponent } from './components/shared/user-form/user-form.component';
import { RegistroPageComponent } from './pages/registro-page/registro-page.component';

@Component({
  selector: 'app-root',
  imports: [CardModule, ButtonModule, UserFormComponent,RegistroPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend1-usuarios';
}
