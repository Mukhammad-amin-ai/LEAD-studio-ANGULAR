import {Component} from '@angular/core';
import { ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

interface Country {
  id: number;
  name: string;
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  logo:string ="assets/logo.svg"
  play:string ="assets/icons/play.svg"
  theme:string ="assets/icons/moon.svg"
  countries: Country[] = [
    { id: 1, name: "EN" },
    { id: 2, name: "RU" },
    { id: 3, name: "UZ" }
  ];

}
