import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// No declares el ContactComponent aquí

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Importa ReactiveFormsModule si decides usarlo más adelante
  ],
  providers: [],
  bootstrap: [] // Aquí no necesitas bootstrap
})
export class AppModule {}
