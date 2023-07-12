import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './dataService.service';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService extends DataService {
  constructor(http:HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts',http)
   }
}

