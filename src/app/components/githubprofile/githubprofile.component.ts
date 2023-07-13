import { Component } from '@angular/core';
import { GithubserviceService } from './githubservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'githubprofile',
  templateUrl: './githubprofile.component.html',
})
export class GithubprofileComponent {
  constructor(
    private service: GithubserviceService,
    private route: ActivatedRoute
  ) {}
  user: any;
  year: any;
  day: any;
  ngOnInit() {
    this.service.getProfile().subscribe((res) => {
      this.user = res;
      let param = this.route.snapshot.paramMap;
      this.year = param.get('year');
      this.day = param.get('day');
    });
  }
}
