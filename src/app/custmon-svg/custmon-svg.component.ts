/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-custmon-svg',
    standalone: true,
    templateUrl: './custmon-svg.component.html',
    styleUrls: ['./custmon-svg.component.css'],
    imports: [CommonModule]
})
export class CustmonSvgComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}