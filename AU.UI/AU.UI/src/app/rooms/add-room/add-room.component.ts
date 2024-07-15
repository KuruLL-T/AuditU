import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core/OnInit';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/rooms/room.service';
import { Build } from 'src/app/models/build';
import { RoomType } from 'src/app/models/roomType';

@Component({
    selector: 'app-add-room',
    templateUrl: './add-room.component.html',
    styleUrls: ['./add-room.component.css']
})

export class AddRoomComponent implements OnInit {
    rooms: Room[] = [];
    build: Build;
    builds: Build[] = [];
    roomType: RoomType;
    roomTypes: RoomType[] = [];

    constructor(private roomService: RoomService) { }

    @Input() room: Room;
    roomId: number;
    buildId: number;
    roomName? = '';
    roomTypeId: number;
    capacity: string;
    floor: string;
    roomNumber: string;

    ngOnInit(): void {
        this.roomService.getBuilds().subscribe((build) => {
            this.builds = build;
        });
        this.roomService.getRoomTypes().subscribe((roomType) => {
            this.roomTypes = roomType;
        });
    }

    @Output() roomsUpdated = new EventEmitter<Room[]>();

    addRoom() {
        let room = {
            roomId: this.roomId,
            buildId: this.buildId,
            roomName: this.roomName,
            roomTypeId: this.roomTypeId,
            capacity: this.capacity,
            floor: this.floor,
            roomNumber: this.roomNumber,
        };
        this.roomService
            .addRoom(room)
            .subscribe((rooms: Room[]) => this.roomsUpdated.emit(rooms));
    }
}