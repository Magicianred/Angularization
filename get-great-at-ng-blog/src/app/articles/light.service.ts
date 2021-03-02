import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightService {
  sharedNode = { light: true };
}
