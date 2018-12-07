import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		MatSidenavModule,
		NoopAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
	],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
