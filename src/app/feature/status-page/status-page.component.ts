import { Component } from '@angular/core';
import { StatusPageService } from './status-page.service';
import { Subject, combineLatest, throwError } from "rxjs";
import { catchError, takeUntil } from "rxjs/operators";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Status } from 'src/app/shared/responses/hacho/status.model';
import { NgFor, NgIf } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

interface Alert {
	type: string;
	message: string;
}

const ALERTS: Alert[] = [
	{
		type: 'danger',
		message: 'Ocorreu algum erro ao conectar com o backend',
  }
];

@Component({
  selector: 'app-status-page',
  standalone: true,
	imports: [NgFor, NgbAlertModule, NgIf],
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent {
  alerts!: Alert[];
  hasError!: Boolean;

  status!: Status;
  constructor( private readonly statusService: StatusPageService, private readonly router: Router){
    this.reset();
  }


  ngOnInit(): void {
    combineLatest([
      this.statusService.get()
    ])
      .pipe(
        catchError((err) => {
          this.hasError = true;
          this.alerts = Array.from(ALERTS);
          //void this.router.navigate(["/"]);
          return throwError(err);
        })
      )
      .subscribe(([status]) => {
        this.status = status;
      });
  }

	close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
    void this.router.navigate(["/"]);
	}

  reset() {
		this.alerts = Array.from(ALERTS);
    this.hasError = false;
	}
}
