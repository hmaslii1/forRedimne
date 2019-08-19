/***  Generated file, do not change.  */
import { MenuComponent } from './menu/menu';
import { logindarkblue_PhonePortrait } from '../pages/logindarkblue/PhonePortrait/logindarkblue';
import { home_PhonePortrait } from '../pages/home/PhonePortrait/home';
export class Screens {
  static declarations = [
    MenuComponent,
    logindarkblue_PhonePortrait,
    home_PhonePortrait
  ];
  static mapping = {
    'logindarkblue': {
      PhonePortrait: logindarkblue_PhonePortrait
    },
    'home': {
      PhonePortrait: home_PhonePortrait
    }
  }
}