import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ListeCommandesComponent } from './admin-dashboard/commandes/liste-commandes/liste-commandes.component';
import { AjouterCommandeComponent } from './admin-dashboard/commandes/ajouter-commande/ajouter-commande.component';
import { RoleGuard } from './guards/role.guard';
import { ListerEmployesComponent } from './admin-dashboard/employés/lister-employes/lister-employes.component';
import { AddEmployesComponent } from './admin-dashboard/employés/add-employes/add-employes.component';
import { UpdateEmployesComponent } from './admin-dashboard/employés/update-employes/update-employes.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},  // Route pour la page d'accueil
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, 
    children: [
      { path: 'commandes/liste', component: ListeCommandesComponent }, 
      { path: 'commandes/ajouter', component: AjouterCommandeComponent }, 
      {path : 'employes/liste',component:ListerEmployesComponent},
      {path : 'employes/ajouter',component: AddEmployesComponent},
      { path: 'employes/modifier/:id', component: UpdateEmployesComponent },
    ]
  } , 
  {
    path: 'caissier-dashboard',
    component: AdminDashboardComponent,
    canActivate: [RoleGuard],
    data: { role: 'caissier' }  // Protéger avec le rôle 'caissier'
  },
  { path: '', redirectTo: '', pathMatch: 'full' },  // Liste des commandes // Redirige vers la page d'accueil pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
