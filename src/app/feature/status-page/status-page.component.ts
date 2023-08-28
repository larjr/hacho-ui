import { Component } from '@angular/core';
import { StatusPageService } from './status-page.service';
import { Subject, combineLatest, throwError } from "rxjs";
import { catchError, takeUntil } from "rxjs/operators";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Status } from 'src/app/shared/responses/hacho/status.model';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent {

  status!: Status;
  constructor( private readonly statusService: StatusPageService, private readonly router: Router,){}


  ngOnInit(): void {
    combineLatest([
      this.statusService.get()
    ])
      .pipe(
        catchError((err) => {
          void this.router.navigate(["/"]);
          return throwError(err);
        })
      )
      .subscribe(([status]) => {
        this.status = status;
      });
  }
}
