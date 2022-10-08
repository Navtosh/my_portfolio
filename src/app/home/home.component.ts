import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loader = true;
  constructor() { }

public loaderContainer(){
  var preloader = document.querySelector("#preloader");
  if (preloader != null) {
    preloader.className = 'preloaded';
  }
 
}
public loaderContainerRemove(){
  var preloader = document.querySelector("#preloader");
  if (preloader != null) {
    preloader.remove();
  }
}

  ngOnInit():void {
    setTimeout(() => {
      this.loaderContainer();
    }, 3000); 
    setTimeout(() => {
      this.loaderContainerRemove();
    }, 7000);   
}
}
