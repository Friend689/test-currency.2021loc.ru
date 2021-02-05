import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyService {
  public charValue: string;
  constructor() {
    this.charValue = '';
  }

  public getValue(): string {
    return this.charValue;
  }
}
