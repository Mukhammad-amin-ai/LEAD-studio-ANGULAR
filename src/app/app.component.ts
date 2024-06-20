import {Component} from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  backgroundImg1 = "assets/background/bg1.svg"
  backgroundImg2 = "assets/background/bg2.png"
  hero = "assets/hero.svg"
  title = "my-app"
  protected readonly console = console;
  protected readonly JSON = JSON;
}
