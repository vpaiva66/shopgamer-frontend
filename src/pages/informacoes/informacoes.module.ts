import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformacoesPage } from './informacoes';
import { InformacoesService } from '../../services/domain/informacoes.service';

@NgModule({
  declarations: [
    InformacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(InformacoesPage),
  ],
  providers: [
    InformacoesService,
  ],
})
export class InformacoesPageModule {}
 