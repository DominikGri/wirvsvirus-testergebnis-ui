import {Component, OnInit} from '@angular/core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {DataStore} from "../data.state";
import {Observable} from "rxjs";
import {Sample} from "../models/data.interface";

@Component({
  selector: 'app-result-component',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  sample$: Observable<Sample>;

  constructor(private dataStore: DataStore) {}

  ngOnInit(): void {
    this.sample$ = this.dataStore.sample$;
  }
}
