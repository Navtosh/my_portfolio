import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
 
  
  // scrollIntoView(elem: any) {
    
  //   console.log(elem);
  //   const IndexItem = document.getElementsByTagName('a');
  //   document.querySelector(elem).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
 
  // }
  
}
