import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Status } from 'src/app/shared/responses/hacho/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusPageService {

  constructor(private readonly http: HttpClient) { }

  get(): Observable<Status> {


let headers = new Headers();
headers.append('Content-Type', 'application/json');

    return this.http
      .get<{ status: Status}>(`https://hacho-5e98cc438444.herokuapp.com/hacho/actuator/health`,)
      .pipe(map((data) => data.status));
  }
} 
