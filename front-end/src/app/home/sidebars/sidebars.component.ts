import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebars',
  templateUrl: './sidebars.component.html',
  styleUrls: ['./sidebars.component.css']
})
export class SidebarsComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
  }
}