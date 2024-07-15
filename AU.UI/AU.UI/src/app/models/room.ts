import { Build } from "./build";
import { RoomType } from "./roomType";

export class Room {
    roomId: number;
    buildId: number;
    build?: Build;
    roomName?: string;
    roomTypeId: number;
    roomType?: RoomType;
    capacity: string;
    floor: string;
    roomNumber: string;
}