import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'contents',
    templateUrl: 'app/contents.component.html'
})
export class ContentsComponent {
    constructor(private router: Router) {
    }

    gotoPage(id: number) {
        switch (id) {
            case 1:
                this.router.navigate(['page1']);
                break;
            case 2:
                this.router.navigate(['page2/function']);
                break;
            default:
                alert('not implemented');
        }
    }
}