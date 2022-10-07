import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBSM(): string{
    return 'Mentalidades: <br>Responsabilidade Pessoal <br>Mentalidade de Crescimento <br>Orientação ao Futuro <br>Persistência <br>Habilidades Comportamentais: <br>Comunicação <br>rabalho em Equipe <br>Atenção para detalhes <br>Proatividade <br>Habilidades Técnicas: <brProfissionalismo';
  }
  getObjetivos(): string{
    return 'Aprender como funciona a conexão entre cliente e servidor pelo back-end, como armazenar as informações com segurança no banco de dados';
  }
}
