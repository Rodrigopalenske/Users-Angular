import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  appService: AppService = new AppService();
}
