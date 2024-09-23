import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit(event: SubmitEvent) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const form = event.target as HTMLFormElement; // Asegúrate de que sea HTMLFormElement

    // Accede a los valores de los campos del formulario
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    console.log('Formulario enviado:', {
      name,
      email,
      message,
    });

    // Reiniciar el formulario si es necesario
    form.reset();
  }
}
