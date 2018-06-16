/*importando a classe Component de node_modules/@angular/core */
import { Component } from '@angular/core';
/*estou dizendo para o compilador através de uma notação(@Component()) que a classe trata-se
um componente*/
@Component({
  selector: 'meu-primeiro-component',
  template: `
    <h1>Primeiro Component </h1>
  `
})
/*export faz com que a classe possa ser vista fora deste arquivo, ou seja
 importada em outros arquivos*/
export class MeuPrimeiroComponent { }
