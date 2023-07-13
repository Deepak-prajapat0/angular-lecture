import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'router',
  templateUrl: './router.component.html'
})
export class RouterComponent {
  constructor(
    private router :Router,
    private route:ActivatedRoute){}
    date:any
    year :any
    ngOnInit(){
      this.date = this.route.snapshot.paramMap.get('date');
      this.year = this.route.snapshot.paramMap.get('year');
      console.log(this.date,this.year)
    }
}
