import { HostListener, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private history: string[] = [];

  // '/produkty', '/produkty/1', '/produkty/2'

  constructor(private router: Router, private location: Location) {}

  @HostListener('window:popstate', ['$event'])
  onPopState() {
    console.log('back button');
    this.history.pop();
  }

  public startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  public getHistory(): string[] {
    return this.history;
  }
}
