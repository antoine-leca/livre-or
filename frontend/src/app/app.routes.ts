import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil';
import { InscriptionComponent } from './pages/inscription/inscription';
import { ConnexionComponent } from './pages/connexion/connexion';
import { ProfilComponent } from './pages/profil/profil';
import { LivreOrComponent } from './pages/livre-or/livre-or';
import { EcrireMessageComponent } from './pages/ecrire-message/ecrire-message';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'profil', component: ProfilComponent },
    { path: 'livre-or', component: LivreOrComponent },
    { path: 'ecrire-message', component: EcrireMessageComponent },
    { path: '**', redirectTo: '' }
];