import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../models/room';
import { RoomService } from './room.service';

import { Build } from '../models/build';
import { RoomType } from '../models/roomType';

@Component({
    selector: 'app-rooms',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
    rooms: Room[] = [];
    build: Build;
    builds: Build[] = [];
    roomType: RoomType;
    roomTypes: RoomType[] = [];

    @Input() room: Room;
    roomId: number;
    buildId: number;
    roomName: string;
    roomTypeId: number;
    capacity: string;
    floor: string;
    roomNumber: string;

    roomToEdit: Room;

    Array = [];
    filtertrue: boolean = true;
    filterfalse: boolean = false;

    roomsMap: Map<number, string> = new Map();

    constructor(private roomService: RoomService) { }

    ngOnInit(): void {
        this.roomService.getRooms().subscribe((room) => {
            this.rooms = room;
        });
        this.roomService.getBuilds().subscribe((build) => {
            this.builds = build;
        });
        this.roomService.getRoomTypes().subscribe((roomType) => {
            this.roomTypes = roomType;
        });
    }

    roomToOpen: Room;
    openRoom(room: Room) {
        this.roomToOpen = room;
    }

    buildToOpen: Build;
    openBuild(build: Build) {
        this.buildToOpen = build;
    }

    editRoom(room: Room) {
        this.roomToEdit = room;
    }
    updateRoomList(rooms: Room[]) {
        this.rooms = rooms;
    }



    filterRoom() {
        let a = {
            buildId: this.buildId,
            roomTypeId: this.roomTypeId,
            capacity: this.capacity,
            floor: this.floor,
        };
        this.roomService
            .searchRoom(a)
            .subscribe((res: any) => {
                this.Array = res
                console.log(this.Array)
                this.filtertrue = false;
                this.filterfalse = true;
            })
    }

    clfilterRoom() {
        this.roomService.getRooms().subscribe((room) => {
            this.rooms = room;
            this.filtertrue = true;
            this.filterfalse = false;
        });
    }
    
    searchText = '';

}
