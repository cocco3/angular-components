import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QaiButton, QaiButtonAnchor, QaiHeading } from '../components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QaiButton, QaiButtonAnchor, QaiHeading],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-components';
}
