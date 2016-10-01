import { Injectable } from '@angular/core';

@Injectable()
export class AnotherService {

    constructor() {
        console.log('AnotherService.constructor');
    }

    log(): void {
        console.log('----anotherService.log');
    }
}