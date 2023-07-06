import { NgIfContext } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
})
export class DirectivesComponent {
  posts=[1,2,3,4]
  viewMode:string=""
map: any;
list: any;

}
