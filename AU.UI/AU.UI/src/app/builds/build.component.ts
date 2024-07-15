import { Component, Input, OnInit } from '@angular/core';
import { Build } from 'src/app/models/build';
import { BuildService } from 'src/app/builds/build.service';

@Component({
    selector: 'app-build',
    templateUrl: './build.component.html',
    styleUrls: ['./build.component.css']
})

export class BuildComponent implements OnInit {
    @Input()
    build: Build;
    builds: Build[] = [];

    buildToEdit: Build;

    constructor(private buildService: BuildService) { }

    ngOnInit(): void {
        this.buildService.getBuilds().subscribe((build) => {
            this.builds = build;
        });
    }

    editBuild(build: Build) {
        this.buildToEdit = build;
    }
    changeBuildList(builds: Build[]) {
        this.builds = builds;
    }

    searchText = '';

}