import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Build } from 'src/app/models/build';
import { BuildService } from 'src/app/builds/build.service';

@Component({
  selector: 'app-change-build',
  templateUrl: './change-build.component.html',
  styleUrls: ['./change-build.component.css']
})

export class ChangeBuildComponent {
  builds: Build[] = [];

  constructor(private buildService: BuildService) { }

  @Input() build?: Build;

  @Output() buildsUpdated = new EventEmitter<Build[]>();

  updateBuild(build: Build) {
    this.buildService
      .updateBuild(build)
      .subscribe((builds: Build[]) => this.buildsUpdated.emit(builds));
  }

  deleteBuild(build: Build) {
    this.buildService
      .deleteBuild(build)
      .subscribe((builds: Build[]) => this.buildsUpdated.emit(builds));
  }
}