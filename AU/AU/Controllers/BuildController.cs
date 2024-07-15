using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AU.Data;
using AU.Models;

namespace AU.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuildsController : ControllerBase
    {
        private readonly DataContext _context;
        public BuildsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Builds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Build>>> GetBuilds()
        {
            if (_context.Builds == null)
            {
                return NotFound();
            }
            return await _context.Builds.ToListAsync();
        }
        // GET api/Builds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Build>> GetBuild(int id)
        {
            if (_context.Builds == null)
            {
                return NotFound();
            }
            var build = await _context.Builds.FindAsync(id);

            if (build == null)
            {
                return NotFound();
            }

            return build;
        }
        // POST api/Builds
        [HttpPost]
        public async Task<ActionResult<Build>> PostBuild(Build build)
        {
            if (_context.Builds == null)
            {
                return Problem("Entity set 'DataContext.Builds' is null.");
            }
            _context.Builds.Add(build);
            await _context.SaveChangesAsync();

            return Ok(await _context.Builds.ToListAsync());

            //return CreatedAtAction("GetBuild", new { id = build.BuildId }, build);
        }
        // PUT api/Builds/5
        [HttpPut]
        public async Task<ActionResult<List<Build>>> UpdateBuild(Build build)
        {
            var dbBuild = await _context.Builds.FindAsync(build.BuildId);
            if (dbBuild == null)
                return BadRequest("Building not found.");

            dbBuild.BuildName = build.BuildName;
            dbBuild.Address = build.Address;
            dbBuild.Floors = build.Floors;
            dbBuild.Other = build.Other;

            await _context.SaveChangesAsync();

            return Ok(await _context.Builds.ToListAsync());
        }
        // DELETE api/Builds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBuild(int id)
        {
            if (_context.Builds == null)
            {
                return NotFound();
            }
            var build = await _context.Builds.FindAsync(id);
            if (build == null)
            {
                return NotFound();
            }
            _context.Builds.Remove(build);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}