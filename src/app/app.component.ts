import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiButton, UiButtonAnchor, QaiHeading } from '../components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiButton, UiButtonAnchor, QaiHeading],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-components';
}
