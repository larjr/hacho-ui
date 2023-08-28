import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Status } from 'src/app/shared/responses/hacho/status.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusPageService {

  constructor(private readonly http: HttpClient) { }

  get(): Observable<Status> {


let headers = new Headers();
headers.append('Content-Type', 'application/json');

    return this.http
      .get<{ status: Status}>(`${environment.apiUrl}/hacho/actuator/health`,)
      .pipe(map((data) => data.status));
  }
} 
