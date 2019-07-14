import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CoreHttpService {

  private readonly coreUrl = environment.url;

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(this.coreUrl + url);
  }
}
