import { Injectable } from '@angular/core';

@Injectable()
export class YourService {

    constructor() {
        console.log('YourService.constructor');
    }

    log(): void {
        console.log('----yourService.log');
    }
}