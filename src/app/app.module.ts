import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ListeCommandesComponent } from './admin-dashboard/commandes/liste-commandes/liste-commandes.component';
import { RouterModule } from '@angular/router';
import { AjouterCommandeComponent } from './admin-dashboard/commandes/ajouter-commande/ajouter-commande.component';
import { ListerEmployesComponent } from './admin-dashboard/employés/lister-employes/lister-employes.component';
import { AddEmployesComponent } from './admin-dashboard/employés/add-employes/add-employes.component';
import { UpdateEmployesComponent } from './admin-dashboard/employés/update-employes/update-employes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    ListeCommandesComponent,
    AjouterCommandeComponent,
    ListerEmployesComponent,
    AddEmployesComponent,
    UpdateEmployesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
