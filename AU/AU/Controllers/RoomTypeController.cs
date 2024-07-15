using AU.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AU.Models;

namespace AU.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomTypesController : ControllerBase
    {
        private readonly DataContext _context;
        public RoomTypesController(DataContext context)
        {
            _context = context;
        }
        // GET: api/RoomTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoomType>>> GetRoomTypes()
        {
            if (_context.RoomTypes == null)
            {
                return NotFound();
            }
            return await _context.RoomTypes.ToListAsync();
        }
        // GET: api/RoomTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RoomType>> GetRoomTypes(int id)
        {
            if (_context.RoomTypes == null)
            {
                return NotFound();
            }
            var roomType = await _context.RoomTypes.FindAsync(id);

            if (roomType == null)
            {
                return NotFound();
            }
            return roomType;
        }
    }
}