import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html'
})
export class ZippyComponent {
  @Input('title') title:string='';
  isExpended:boolean=false;
  toggle(){
    this.isExpended = !this.isExpended;
  }
}
