import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/rooms/room.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-open-room',
  templateUrl: './open-room.component.html',
  styleUrls: ['./open-room.component.css']
})

export class OpenRoomComponent implements OnInit {
  rooms: Room[] = [];
  RoomList$!: Observable<any[]>;
  BuildList$!: Observable<any[]>;
  RoomTypeList$!: Observable<any[]>;

  constructor(private roomService: RoomService) { }

  @Input() room?: Room;

  ngOnInit(): void {
    this.RoomList$ = this.roomService.getRooms();
    this.BuildList$ = this.roomService.getBuilds();
    this.RoomTypeList$ = this.roomService.getRoomTypes();
  }
}