import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { DataGraphGenComponent } from './data-graph-gen/data-graph-gen.component';
import { TableComponent } from './table/table.component';
import { GraficaComponent } from './grafica/grafica.component';
import { LoginComponent } from './login/login.component';
import { GuiaComponent } from './guia/guia.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    DataGraphGenComponent,
    TableComponent,
    GraficaComponent,
    LoginComponent,
    GuiaComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'HomeView', component: HomeViewComponent },
      { path: 'Data', component: DataGraphGenComponent },
      { path: 'Login', component: LoginComponent, pathMatch: 'full' },
      { path: '**', pathMatch: 'full', redirectTo: 'Login'  }

    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
