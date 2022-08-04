import { SqlDatabaseType } from '@portalBasicClasses/database/sqlDatabaseType';
import { IDtoBuiltInName } from '@portalBasicClasses/dto/IDtoBuiltInName';
import { IDtoId } from '@portalBasicClasses/dto/IDtoId';
import { IDtoName } from '@portalBasicClasses/dto/IDtoName';
import { IJTypedObject } from '@portalBasicClasses/JType/IJTypedObject';

export interface ConfigApiDto {
  baseLocaleId: number;
  locales: ILocale[];
  uiThemes: UIThemeApiDto[];
  databaseType: SqlDatabaseType;
}

export interface ILocale {
  id: number;
  builtInName: string;
  name: string;
  isBase: boolean;
}

export interface UIThemeApiDto extends IDtoId, IDtoName, IDtoBuiltInName {
  localeId: number;
  settings: UIThemeSettingsBase;
}

export const enum UIThemeType {
  Default = 'Default',
}

export abstract class UIThemeSettingsBase
  implements IJTypedObject<UIThemeType>
{
  abstract jType: UIThemeType;

  bodyCssClass: string;
}
