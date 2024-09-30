import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  constructor(private alertController: AlertController) {}

  public altura: number | undefined;
  public peso:   number | undefined;
  public imc:    number | undefined;
  public classificacao:    string | undefined;


  exibir(){
    if(this.peso && this.altura){
      this.imc = this.peso / (this.altura * this.altura);

      this.imc < 18.5 ? this.classificacao = "Abaixo do peso" :
      this.imc >= 18.5 && this.imc <= 24.9 ? this.classificacao = "Peso normal" :
      this.imc >= 25 && this.imc <= 29.9 ? this.classificacao = "Sobrepeso" :
      this.imc >= 30 ? this.classificacao = "Obesidade" : this.classificacao = "";


    }else{
      this.aviso();
    }
  }

  async aviso(){
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Por favor, digite os valores para calcularmos o IMC',
      buttons: ['OK']
      });
      await alert.present();
  }
}
