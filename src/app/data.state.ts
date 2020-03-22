import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Sample} from "./models/data.interface";

@Injectable({ providedIn: 'root' })
export class DataStore {
  private subject = new BehaviorSubject<string>(null);
  hash$ = this.subject.asObservable();

  private subjectData = new BehaviorSubject<Sample>(null);
  sample$ = this.subjectData.asObservable();

  setHash(hash: string) {
    this.subject.next(hash);
  }

  setSample(sample: Sample) {
    this.subjectData.next(sample);
  }
}
