import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeNGModule } from 'src/app/primeng.module';
import { CadastroMotivoComponent } from './cadastro-motivo/cadastro-motivo.component';
import { ListaMotivosComponent } from './lista-motivos/lista-motivos.component';
import { MotivosRoutingModule } from './motivos.routing';

@NgModule({
  declarations: [
    CadastroMotivoComponent,
    ListaMotivosComponent
  ],
  imports: [
    PrimeNGModule,
    FormsModule,
    MotivosRoutingModule
  ],
})
export class MotivosModule { }
