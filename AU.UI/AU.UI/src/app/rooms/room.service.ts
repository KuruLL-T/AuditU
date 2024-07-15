import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Room } from '../models/room';
import { Build } from '../models/build';
import { RoomType } from '../models/roomType';

@Injectable({
    providedIn: 'root',
})
export class RoomService {
    constructor(private http: HttpClient) { }

    readonly SEAPIUrl = 'https://localhost:7260/api';

    getRooms(): Observable<Room[]> {
        return this.http.get<Room[]>(this.SEAPIUrl + `/Rooms`);
    }
    addRoom(room: Room): Observable<Room[]> {
        return this.http.post<Room[]>(this.SEAPIUrl + `/Rooms`, room);
    }
    updateRoom(room: Room): Observable<Room[]> {
        return this.http.put<Room[]>(this.SEAPIUrl + `/Rooms`, room);
    }
    deleteRoom(room: Room): Observable<Room[]> {
        return this.http.delete<Room[]>(this.SEAPIUrl + `/Rooms/${room.roomId}`);
    }

    getBuilds(): Observable<Build[]> {
        return this.http.get<Build[]>(this.SEAPIUrl + `/Builds`);
    }
    getRoomTypes(): Observable<RoomType[]> {
        return this.http.get<RoomType[]>(this.SEAPIUrl + `/RoomTypes`);
    }

    searchRoom(data: any): Observable<Room[]> {
        return this.http.post<Room[]>(this.SEAPIUrl + `/Rooms/SearchRoom`, data);
    }
}