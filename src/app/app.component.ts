import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  QaiBadge,
  QaiButton,
  QaiButtonAnchor,
  QaiHeading,
  QaiIcon,
} from '../components';
import { QaiInput } from '../forms/qai-input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    QaiButton,
    QaiButtonAnchor,
    QaiHeading,
    QaiIcon,
    QaiBadge,
    QaiInput,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-components';
}
