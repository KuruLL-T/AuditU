import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/rooms/room.service';

@Component({
  selector: 'app-change-room',
  templateUrl: './change-room.component.html',
  styleUrls: ['./change-room.component.css']
})

export class ChangeRoomComponent {
  rooms: Room[] = [];

  BuildList$!: Observable<any[]>;
  RoomTypeList$!: Observable<any[]>;

  constructor(private roomService: RoomService) { }

  @Input() room?: Room;

  ngOnInit(): void {
    this.BuildList$ = this.roomService.getBuilds();
    this.RoomTypeList$ = this.roomService.getRoomTypes();
  }

  @Output() roomsUpdated = new EventEmitter<Room[]>();

  updateRoom(room: Room) {
    this.roomService
      .updateRoom(room)
      .subscribe((rooms: Room[]) => this.roomsUpdated.emit(rooms));
  }

  deleteRoom(room: Room) {
    this.roomService
      .deleteRoom(room)
      .subscribe((rooms: Room[]) => this.roomsUpdated.emit(rooms));
  }
}