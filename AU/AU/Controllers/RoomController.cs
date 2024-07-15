using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AU.Data;
using AU.Models;
using AU.Models.DTO;

namespace AU.Controllers
{
        [Route("api/[controller]")]
        [ApiController]
        public class RoomsController : ControllerBase
        {
            private readonly DataContext _context;
            public RoomsController(DataContext context)
            {
                _context = context;
            }

            // GET: api/Rooms
            [HttpGet]
            public async Task<ActionResult<IEnumerable<Room>>> GetRooms()
            {
                if (_context.Rooms == null)
                {
                    return NotFound();
                }
                return await _context.Rooms.ToListAsync();
            }
            // GET api/Rooms/5
            [HttpGet("{id}")]
            public async Task<ActionResult<Room>> GetRoom(int id)
            {
                if (_context.Rooms == null)
                {
                    return NotFound();
                }
                var room = await _context.Rooms.FindAsync(id);

                if (room == null)
                {
                    return NotFound();
                }

                return room;
            }
            // POST api/Rooms
            [HttpPost]
            public async Task<ActionResult<Room>> PostRoom(Room room)
            {
                if (_context.Rooms == null)
                {
                    return Problem("Entity set 'DataContext.Rooms' is null.");
                }
                _context.Rooms.Add(room);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetRoom", new { id = room.RoomId }, room);
            }
            // PUT api/Rooms/5
            [HttpPut]
            public async Task<ActionResult<List<Room>>> UpdateRoom(Room room)
            {
                var dbRoom = await _context.Rooms.FindAsync(room.RoomId);
                if (dbRoom == null)
                    return BadRequest("Rooming not found.");

                dbRoom.BuildId = room.BuildId;
                dbRoom.RoomName = room.RoomName;
                dbRoom.RoomTypeId = room.RoomTypeId;
                dbRoom.Capacity = room.Capacity;
                dbRoom.Floor = room.Floor;
                dbRoom.RoomNumber = room.RoomNumber;


                await _context.SaveChangesAsync();

                return Ok(await _context.Rooms.ToListAsync());
            }
            [HttpPut("[action]")]
            public async Task<ActionResult<List<Room>>> ChangeRoom(Room room)
            {
                var dbRoom = await _context.Rooms.FindAsync(room.RoomId);
                if (dbRoom == null)
                    return BadRequest("Rooming not found.");

                dbRoom.BuildId = room.BuildId;
                dbRoom.RoomName = room.RoomName;
                dbRoom.RoomTypeId = room.RoomTypeId;
                dbRoom.Capacity = room.Capacity;
                dbRoom.Floor = room.Floor;
                dbRoom.RoomNumber = room.RoomNumber;

                await _context.SaveChangesAsync();

                return Ok(await _context.Rooms.ToListAsync());
            }
        // DELETE api/Rooms/5
        [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteRoom(int id)
            {
                if (_context.Rooms == null)
                {
                    return NotFound();
                }
                var room = await _context.Rooms.FindAsync(id);
                if (room == null)
                {
                    return NotFound();
                }
                _context.Rooms.Remove(room);
                await _context.SaveChangesAsync();
                return NoContent();
            }

        [HttpPost("[action]")]
        public ActionResult SearchRoom(SearchRoomDto searchRoomDto)
        {
            if (_context.Rooms == null)
            {
                return NotFound();
            }

            var room = _context.Rooms.Where(
                a => a.BuildId == searchRoomDto.BuildId &&
                a.RoomTypeId == searchRoomDto.RoomTypeId &&
                Convert.ToInt32(a.Capacity) >= searchRoomDto.Capacity &&
                Convert.ToInt32(a.Floor) <= searchRoomDto.Floor).ToList();

            return Ok(room);
        }
    }
}
