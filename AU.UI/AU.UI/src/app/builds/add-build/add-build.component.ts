import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core/OnInit';
import { Build } from 'src/app/models/build';
import { BuildService } from 'src/app/builds/build.service';

@Component({
  selector: 'app-add-build',
  templateUrl: './add-build.component.html',
  styleUrls: ['./add-build.component.css']
})

export class AddBuildComponent {
  builds: Build[] = [];

  constructor(private buildService: BuildService) { }

  @Input() build: Build;
  buildId: number;
  buildName: string;
  address: string;
  floors: string;
  other? = '';

  @Output() buildsUpdated = new EventEmitter<Build[]>();

  addBuild() {
    let build = {
      buildId: this.buildId,
      buildName: this.buildName,
      address: this.address,
      floors: this.floors,
      other: this.other,
    };
    this.buildService
      .addBuild(build)
      .subscribe((builds: Build[]) => this.buildsUpdated.emit(builds));
  }
}