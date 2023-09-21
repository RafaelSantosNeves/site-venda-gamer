import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /**
   * This is the toogle button elemenbt, look at HTML and see its defination
   */
  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.renderer.listen('window', 'click', (e: Event) => {
      /* pega o html puro da onde foi clicado do e.target e cria a resposta esperada pro if*/
      const divElement = e.target as HTMLDivElement;
      const menuElement =  'menu';
      const button = e.target as HTMLDivElement
      const buttonMenu = 'buttonMenu'

      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
      if (
        button.classList[0] !== buttonMenu &&
        divElement.id !== menuElement
      ) {
        this.isMenuOpen = false;
      }
    });
  }

  isMenuOpen = false;

  toggleClass() {
    this.isMenuOpen = true
  }
}
