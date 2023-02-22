import { Component, OnInit } from '@angular/core';
import { greeting } from 'tool';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  
  ngOnInit(): void {
    greeting();
  }
}
