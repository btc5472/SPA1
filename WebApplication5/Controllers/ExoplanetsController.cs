using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication5.Models;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExoplanetsController : ControllerBase
    {
        private readonly BookDatabase2Context _context;

        public ExoplanetsController(BookDatabase2Context context)
        {
            _context = context;
        }

        // GET: api/Exoplanets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Exoplanet>>> GetSolarSystems()
        {
            return await _context.Exoplanets.ToListAsync();
        }


        // GET api/Exoplanets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExoplanetDto>> GetExoplanet(int id)
        {
            Exoplanet exoplanet = await _context.Exoplanets.FindAsync(id);
            SolarSystem solarSystem = await _context.SolarSystems.FindAsync(exoplanet.SolarSystemId);

            if (solarSystem == null)
            {
                return NotFound();
            }

            ExoplanetDto exoplanetDto = new ExoplanetDto
            // Expect you to return to the client someting more meaningful than the scaffolded code. Expect DTO to have the member variables from both tables/classes 1:22:20 in Entity Framework Part 2 video
            {
                ExoplanetId = exoplanet.ExoplanetId,
                Name = exoplanet.Name,
                NumMoons = exoplanet.NumMoons,
                Life = exoplanet.Life,
                SolarSystemName = exoplanet.SolarSystem.Name
            };
            return exoplanetDto;
        }
    }
}