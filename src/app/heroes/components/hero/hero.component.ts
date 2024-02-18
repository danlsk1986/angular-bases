import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = 'ironman';
  public age: number = 45;


  public heroes = [
    {
      name: 'Venom',
      age: 36,
    },
    {
      name: 'Spiderman',
      age: 17
    },
    {
      name: 'Thor',
      age: 1500
    },
    {
      name: 'Capitain America',
      age: 110
    },
    {
      name: 'Punisher',
      age: 40
    }
]

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = this.heroes[Math.floor(Math.random() * this.heroes.length)].name;
  }

  changeAge(): void {
    this.age = this.heroes[Math.floor(Math.random() * this.heroes.length)].age;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
