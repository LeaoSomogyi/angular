import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ErroComponent } from './erro/erro.component';

const rotasApp: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent},
    { path: 'cadastro/:idFoto', component: CadastroComponent},
    { path: 'erro', component: ErroComponent},
    { path: '**', redirectTo: 'erro'}
]

export const routes = RouterModule.forRoot(rotasApp);