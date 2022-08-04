import { Component } from '@angular/core';
import { ComponentWithViewContextBase } from '@basicClasses/contexts/componentWithViewContextBase';
import { AppViewContextInitService, IAppViewContext } from './app.context';

type Context = IAppViewContext;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ComponentWithViewContextBase<IAppViewContext> {
  title = 'Webportal';

  constructor(private viewContextService: AppViewContextInitService) {
    super();
  }

  get layoutViewContext() {
    return this._lazy(
      (x) => x.layoutViewContext,
      () => {
        return this.viewContext.layoutViewContext();
      }
    );
  }

  _onInit() {
    this.viewContext = this.viewContextService.createAppViewContext();
  }
}
