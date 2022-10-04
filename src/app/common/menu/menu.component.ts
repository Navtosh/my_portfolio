import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  Menuitem :any;

  constructor() {
    this.Menuitem = [
      {
        name : 'Home',
        href : 'home'
      },
      {
        name : 'About',
        href : 'about'
      },
      {
        name : 'Portfolio',
        href : 'portfolio'
      },
      {
        name :  'Service',
        href : 'service'
      },
      {
        name : 'Testimonial',
        href : 'testimonial'
      },
      {
        name : 'Blog',
        href : 'blog'
      },
      {
        name : 'Contact',
        href : 'contact'
      }

    ]
   }

  ngOnInit(): void {
    
  }

}
