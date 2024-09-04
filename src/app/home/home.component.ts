import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  url: string;
  port: number;

  constructor() {
    this.url = window.location.href; // Get the full URL
    this.port = window.location.port ? parseInt(window.location.port) : (window.location.protocol === 'https:' ? 443 : 80);
  }
}
