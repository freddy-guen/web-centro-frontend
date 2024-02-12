import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements DoCheck {

  isMenuVisible = false;
  
  isAdminOrRoot = false;
  isAdmin = false;
  isRoot = false;
  isUser = false;

  constructor(private userService : UserService, private router : Router) {}

  ngDoCheck(): void {
    
    const currentRoute = this.router.url;

    this.isUser = this.userService.isUser();
    this.isAdmin = this.userService.isAdmin();
    this.isRoot = this.userService.isRoot();
    this.isAdminOrRoot = this.userService.isAdminOrRoot();

    if(currentRoute.includes('/administration')) {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true;
    }

  }


}
