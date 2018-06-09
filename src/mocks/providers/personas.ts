import { Injectable } from '@angular/core';

import { Persona } from '../../models/persona';

@Injectable()
export class Personas {
  personas: Persona[] = [];

  defaultPersona: any = {
    "name": "Job name",
    "profilePic": "assets/img/market_logo.png",
    "about": "Subtitle",
    "info": "Money offered",
    "description": "Description",
    "skills": "Skills required",
    "money": "Money earned",
  };

  constructor() {
    let personas = [
      {
        "name": "Market 1",
        "profilePic": "assets/img/market_logo.png",
        "about": "Subtitle",
        "info": "Money offered",
        "description": "Description",
        "skills": "Skills required",
        "money": "Money earned"
      },
      {
        "name": "Market 2",
        "profilePic": "assets/img/market_logo.png",
        "about": "Subtitle",
        "info": "Money offered",
        "description": "Description",
        "skills": "Skills required",
        "money": "Money earned"
      },
      {
        "name": "Market 3",
        "profilePic": "assets/img/market_logo.png",
        "about": "Subtitle",
        "info": "Money offered",
        "description": "Description",
        "skills": "Skills required",
        "Money": "Money earned"
      }
    ];

    for (let persona of personas) {
      this.personas.push(new Persona(persona));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.personas;
    }

    return this.personas.filter((persona) => {
      for (let key in params) {
        let field = persona[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return persona;
        } else if (field == params[key]) {
          return persona;
        }
      }
      return null;
    });
  }

  add(persona: Persona) {
    this.personas.push(persona);
  }

  delete(persona: Persona) {
    this.personas.splice(this.personas.indexOf(persona), 1);
  }
}