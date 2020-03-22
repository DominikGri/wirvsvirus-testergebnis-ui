import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {Observable} from "rxjs";
import {Sample} from "./models/data.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, public datepipe: DatePipe) {
  }

  getHash(sampleId: string, name: string, birthday: string): Observable<string> {
    birthday = this.datepipe.transform(birthday, 'yyyy-MM-dd');

    return this.http.get<string>(
      `https://wirvsvirus-backend.azurewebsites.net/hashes?sampleId=${sampleId}&name=${name}&birthday=${birthday}`
    );
  }

  getData(hash:string) {
    return this.http.get<Sample>(
      `https://wirvsvirus-backend.azurewebsites.net/tests/${hash}`
    );
  }
}
