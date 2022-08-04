import { Injectable } from '@angular/core';
import { CoverBase } from '@basicClasses/cover/coverBase';

@Injectable({
  providedIn: 'root',
})
export class MainCover extends CoverBase {
  constructor() {
    super();
  }
}
