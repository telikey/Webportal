import { MainCover } from '@portalBasicClasses/covers/mainCover';

export interface IAppViewContext {}

export class AppViewContext implements IAppViewContext {
  constructor(mainCover: MainCover) {}
}
