import { Injectable } from "@angular/core";
import { CurrencyService } from "./currency.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DailyUtf8Service extends CurrencyService {
  constructor(charCodeValue: string, private http: HttpClient) {
    super(charCodeValue);
  }
  private getHttpValute() {
    this.http.get('https://www.cbr-xml-daily.ru/daily_utf8.xml', { responseType: "text" }).subscribe(response => {
      console.log(response);
    });
  }
}
