import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiButton, UiButtonAnchor, UiHeading } from '../components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiButton, UiButtonAnchor, UiHeading],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-components';
}
