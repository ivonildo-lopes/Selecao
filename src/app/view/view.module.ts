import { CadastroLocalComponent } from './selecao-cadastro/cadastro-local/cadastro-local.component';
import { CadastroUsuarioComponent } from './selecao-cadastro/cadastro-usuario/cadastro-usuario.component';
import { DadoSelecaoComponent } from './dado-selecao/dado-selecao.component';
import { LocalService } from './../service/local.service';
import { UsuarioService } from './../service/usuario.service';
import { SelectiveService } from './../service/selective.service';

import { VersaoService } from './../service/versao.service';
import { BaseService } from './../service/base.service';
import { ComponentModule } from './../components/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApiService } from '../service/api.service';


import { SelecaoComponent } from './selecao/selecao.component';

import { ListagemUsuarioComponent } from './selecao/listagem-usuario/listagem-usuario.component';
import { ListagemLocalComponent } from './selecao/listagem-local/listagem-local.component';
import { SelecaoCadastroComponent } from './selecao-cadastro/selecao-cadastro.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  providers: [
    ApiService,
    VersaoService,
    SelectiveService,
    UsuarioService,
    LocalService
  ],
  declarations: [
    SelecaoComponent,
    DadoSelecaoComponent,
    CadastroUsuarioComponent,
    CadastroLocalComponent,
    ListagemUsuarioComponent,
    ListagemLocalComponent,
    SelecaoCadastroComponent
  ]
})
export class ViewModule { }
