import { Injectable } from "@angular/core";
import { CurrencyService } from "./currency.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DailyJsonService extends CurrencyService {
  constructor(private http: HttpClient) {
    super();
  }
  public getHttpValute() {
    this.http.get('https://www.cbr-xml-daily.ru/daily_json.js', { responseType: "json" }).subscribe(response => {
      // console.log(response.Valute.EUR.Value);
      let temp: any = response;
      // console.log(temp.Valute.EUR.Value);
      this.charValue = temp.Valute.EUR.Value;
    });
  }
}
