import { Directive, OnInit, Renderer2 , ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor : string = 'transparent';
  @Input('appBetterHighlight') highlightColor : string = 'blue';
  @HostBinding('style.backgroundCOlor') backgroundCOlor : string;

  constructor(private elementRef : ElementRef ,private renderer : Renderer2) {

   }

   ngOnInit() {
    //  this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'blue');
    this.backgroundCOlor = this.defaultColor;
   }

   @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundCOlor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
  //  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
   this.backgroundCOlor = this.defaultColor;

  }


}
