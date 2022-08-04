import { Injectable } from '@angular/core';
import { ApiService } from './api/apiService';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(api: ApiService) {}
}
