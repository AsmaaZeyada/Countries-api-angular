import { Component, OnInit } from '@angular/core';
import {  ThemeService } from './theme/theme.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rest-countries-api';

  theme: string;

  constructor (private themeService: ThemeService) {}

   ngOnInit(): void {
     this.themeService.mode$.subscribe(
       (res)=> this.theme = res
     );
   }



}
