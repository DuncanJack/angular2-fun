import { Injectable } from '@angular/core';

@Injectable()
export class MyService {

    constructor() {
        console.log('MyService.constructor');
    }

    log(): void {
        console.log('myService.log');
    }
}