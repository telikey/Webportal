import { Injectable } from '@angular/core';
import {
  ILayoutViewContext,
  LayoutChildViewContext,
  LayoutViewContext,
} from '@commonComponents/components/layout/layout.context';
import { MainCover } from '@portalBasicClasses/covers/mainCover';

export interface IAppViewContext {
  layoutViewContext(): ILayoutViewContext;
}

export class AppViewContext implements IAppViewContext {
  constructor(private mainCover: MainCover) {}

  layoutViewContext(): ILayoutViewContext {
    const result = new LayoutViewContext(
      this.mainCover,
      undefined,
      (mainCover) => {
        return new LayoutChildViewContext(mainCover, (mainCover) => {
          return 2;
        });
      },
      (mainCover) => {
        return new LayoutChildViewContext(mainCover, (mainCover) => {
          return 2;
        });
      },
      (mainCover) => {
        return new LayoutChildViewContext(mainCover, (mainCover) => {
          return 2;
        });
      }
    );
    return result;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AppViewContextInitService {
  constructor(private mainCover: MainCover) {}
  createAppViewContext(): IAppViewContext {
    const result = new AppViewContext(this.mainCover);
    return result;
  }
}
