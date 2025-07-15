import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserFormComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-angular';

  
}
