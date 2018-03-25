import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {AppComponent} from './app.component';
import {FooterComponent} from './shared/layout/footer/footer.component';
import {HeaderComponent} from './shared/layout/header/header.component';
import {SidebarComponent} from './shared/layout/sidebar/sidebar.component';
import {IndexComponent} from './admin/categories/index/index.component';

const appRoutes: Routes = [
    {path: '', component: IndexComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        IndexComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false}
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
