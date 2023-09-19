import { Directive, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appMenuToggle]'
})
export class MenuToggleDirective{

  @HostBinding('class.div') corDeFundo: boolean = false; // Inicie como falso

  

  @HostListener('mouseout') onClick() {
    this.corDeFundo = !this.corDeFundo; // Alternar entre verdadeiro e falso ao clicar
  }
}
