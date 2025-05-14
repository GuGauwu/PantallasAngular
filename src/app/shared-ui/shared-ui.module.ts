import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../ui-components/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonComponent // Importa en lugar de declarar
  ],
  exports: [
    ButtonComponent // Exporta normalmente
  ]
})
export class SharedUiModule {}