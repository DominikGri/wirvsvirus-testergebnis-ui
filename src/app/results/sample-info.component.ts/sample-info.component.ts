import {Component, Input} from '@angular/core';
import {Sample} from "../../models/data.interface";

@Component({
  selector: 'app-sample-info-component',
  templateUrl: './sample-info.component.html',
  styleUrls: ['./sample-info.component.scss']
})
export class SampleInfoComponent {
  @Input() sample: Sample;

  constructor() {}
}
