import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var handleSignout: any;

@Component({
  selector: 'app-sidebars',
  templateUrl: './sidebars.component.html',
  styleUrls: ['./sidebars.component.css']
})
export class SidebarsComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) {}



  ngOnInit() {
  }

  handleSignOut(){
    handleSignout();
    sessionStorage.removeItem("loggedInUser")
    this.router.navigate(["/login"]).then(() => {
      window.location.reload()
    })
  }
}