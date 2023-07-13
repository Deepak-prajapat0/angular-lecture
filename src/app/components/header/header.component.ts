import { Component } from '@angular/core';


const routerLinks =[{ name: "Home",link: "/"},
    { name: "Direactive",link: "/direactive"},
    { name: "RegisterForm",link: "/register"},
    { name: "Reactive-form",link: "/reactive-form"},
    { name: "todo",link: "/todo"},
    { name: "zippy",link: "/zippy"},
    { name: "change password",link: "/change-password"},
    { name: "http",link: "/http"},
    { name: "Github",link: "/github/followers"},
]

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
 links: any[] =routerLinks;
}
