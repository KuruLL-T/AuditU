import { Component, Input, OnInit } from '@angular/core';
import { Build } from 'src/app/models/build';
import { BuildService } from 'src/app/builds/build.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-open-build',
  templateUrl: './open-build.component.html',
  styleUrls: ['./open-build.component.css']
})

export class OpenBuildComponent implements OnInit {
  builds: Build[] = [];
  BuildList$!: Observable<any[]>;

  constructor(private buildService: BuildService) { }

  @Input() build?: Build;

  ngOnInit(): void {
    this.BuildList$ = this.buildService.getBuilds();
  }
}