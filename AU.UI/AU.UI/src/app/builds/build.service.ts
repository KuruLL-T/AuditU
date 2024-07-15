import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Build } from '../models/build';

@Injectable({
    providedIn: 'root',
})
export class BuildService {
    constructor(private http: HttpClient) { }

    readonly SEAPIUrl = 'https://localhost:7260/api';

    getBuilds(): Observable<Build[]> {
        return this.http.get<Build[]>(this.SEAPIUrl + `/Builds`);
    }
    addBuild(build: Build): Observable<Build[]> {
        return this.http.post<Build[]>(this.SEAPIUrl + `/Builds`, build);
    }
    updateBuild(build: Build): Observable<Build[]> {
        return this.http.put<Build[]>(this.SEAPIUrl + `/Builds`, build);
    }
    deleteBuild(build: Build): Observable<Build[]> {
        return this.http.delete<Build[]>(this.SEAPIUrl + `/Builds/${build.buildId}`);
    }
}