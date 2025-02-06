class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {
      let ataque = '';
  
      if (this.tipo === 'mago') {
        ataque = 'magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'espada';
      } else if (this.tipo === 'monge') {
        ataque = 'artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'shuriken';
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const heroi1 = new Heroi('Arthur', 30, 'mago');
  heroi1.atacar(); 
  
  const heroi2 = new Heroi('Lancelot', 25, 'guerreiro');
  heroi2.atacar(); 
  
  const heroi3 = new Heroi('Wu', 40, 'monge');
  heroi3.atacar(); 
  
  const heroi4 = new Heroi('Shin', 28, 'ninja');
  heroi4.atacar(); 
  