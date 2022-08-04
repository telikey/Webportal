import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfig } from '@basicClasses/appConfig/appConfig';
import { BootstrapModule } from '@basicClasses/bootstrapModule/bootstrapModule';
import { CommonComponentsModule } from '@commonComponents/commonComponents.module';
import { AppComponent } from './appComponent/app.component';

export function PRE_INITIALZER(config: AppConfig) {
  return () => {
    return Promise.all([config.load()]);
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BootstrapModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    CommonComponentsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: PRE_INITIALZER,
      deps: [AppConfig],
      multi: true,
    },
    AppConfig,
    { provide: Window, useValue: window },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
