import {Component} from '@angular/core';
import {faCheckCircle, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-result-component',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  faCheckCircle = faCheckCircle;
  faInfoCircle = faInfoCircle
}
