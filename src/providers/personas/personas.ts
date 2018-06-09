import { Injectable } from '@angular/core';

import { Persona } from '../../models/persona';
import { Api } from '../api/api';

@Injectable()
export class Personas {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/personas', params);
  }

  add(persona: Persona) {
  }

  delete(persona: Persona) {
  }

}
