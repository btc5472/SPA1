using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication5.Models;
using WebApplication5.ViewModels;

namespace WebApplication5
{
    [Route("api/[controller]")]
    [ApiController]
    public class SolarSystemsWithExoplanetsController : ControllerBase
    {
        private readonly BookDatabase2Context _context;

        public SolarSystemsWithExoplanetsController(BookDatabase2Context context)
        {
            _context = context;
        }

        // GET api/solarSystemsWithExoplanets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<SolarSystemWithExoplanetsVM>>> GetSolarSystemWithExoplanets(int id)
        {
            var solarSystemWithExoplanets = from s in _context.SolarSystems
                                            where s.SolarSystemId == id
                                            select new SolarSystemWithExoplanetsVM
                                            {
                                                SolarSystemName = s.Name,
                                                ExoplanetNameList = s.Exoplanets.Select(e => e.Name).ToList()
                                            };
            return await solarSystemWithExoplanets.ToListAsync();
        }
    }
}
