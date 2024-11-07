import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  QaiBadge,
  QaiButton,
  QaiButtonAnchor,
  QaiHeading,
  QaiIcon,
} from '../components';
import {
  QaiCheckbox,
  QaiInput,
  QaiSelect,
  QaiRadio,
  QaiTextarea,
} from '../forms';

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
    QaiCheckbox,
    QaiInput,
    QaiRadio,
    QaiSelect,
    QaiTextarea,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-components';
}
