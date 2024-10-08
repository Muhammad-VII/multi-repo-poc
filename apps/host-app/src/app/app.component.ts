import { Component, Injector, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EhsUiComponent } from 'ehs-ui';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EhsUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'host-app';
}
