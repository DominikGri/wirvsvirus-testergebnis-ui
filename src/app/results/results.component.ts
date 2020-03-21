import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'result-component',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']})
export class ResultsComponent {
  faCheckCircle = faCheckCircle;
}
