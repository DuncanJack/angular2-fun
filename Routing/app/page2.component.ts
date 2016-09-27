import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'page2',
    templateUrl: 'app/page2.component.html'
})
export class Page2Component {
    constructor(private route: ActivatedRoute) {
        this.route.params.forEach((params: Params) => {
            console.log(params)
        });
    }
}