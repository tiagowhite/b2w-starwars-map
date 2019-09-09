import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { interval, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { isPlanetsListLoading } from '../../../store/selectors/planet.selector';
import { AppState } from '../../../store/state/app.state';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy{

  @Input() mode: 'progress-bar' | 'spinner' | any;
  private loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.loading$ = this.store.pipe(select(isPlanetsListLoading));
  }


  ngOnInit() {

  }


  ngOnDestroy() {

  }

}
