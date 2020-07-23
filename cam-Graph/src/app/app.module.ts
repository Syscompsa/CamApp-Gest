import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { DataGraphGenComponent } from './data-graph-gen/data-graph-gen.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    DataGraphGenComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([  
      { path: 'HomeView', component: HomeViewComponent, pathMatch: 'full' },
      { path: 'Data', component: DataGraphGenComponent, pathMatch: 'full' }
 
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
