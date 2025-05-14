import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa los componentes que necesites, por ejemplo:
import { ButtonComponent } from '../ui-components/button/button.component';
import { PanelComponent } from '../ui-components/panel/panel.component';

@NgModule({
  declarations: [
    ButtonComponent,
    PanelComponent
    // Agrega aquí otros componentes
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    PanelComponent
    // Exporta los mismos componentes
  ]
})
export class SharedUiModule { }