import { SelecaoCadastroComponent } from './view/selecao-cadastro/selecao-cadastro.component';
import { SelecaoComponent } from './view/selecao/selecao.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: 'selective/:id/users', component: SelecaoComponent },
    { path: 'selective/:id/places', component: SelecaoComponent },
    { path: 'selective/:id/user/new', component: SelecaoCadastroComponent },
    { path: 'selective/:id/place/new', component: SelecaoCadastroComponent },
];
