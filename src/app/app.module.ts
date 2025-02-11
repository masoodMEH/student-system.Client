import {BrowserModule, provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgIconsModule} from '@ng-icons/core';
import {
  heroPlusSmallSolid,
  heroHomeSolid,
  heroCogSolid,
  heroCheckSolid,
  heroExclamationCircleSolid
} from '@ng-icons/heroicons/solid';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './core/components/navbar/navbar.component';
import {ButtonComponent} from './ui/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroPlusSmallSolid, heroHomeSolid, heroCogSolid, heroCheckSolid, heroExclamationCircleSolid})
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
