import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  navegar(url:string) {
    window.location.href = url;
  }
}
