import { NgIfContext } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
})
export class DirectivesComponent {
[x: string]: any;
  posts = [1, 2, 3, 4];
  viewMode: string = '';
  map: any;
  list: any;
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];
  
  onAdd(){
    this.courses.push({id:4,name:"course4"})
    console.log(this.courses)
  }
  loadCourse(){
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ]
  }
  onRemove(course: { id: number; name: string; }){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1)
  }
  trackCourse(){
    return this.courses
  }
}
