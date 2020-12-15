using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication5.Models;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SolarSystemsController : ControllerBase
    {
        private readonly BookDatabase2Context _context;

        public SolarSystemsController(BookDatabase2Context context)
        {
            _context = context;
        }

        // GET: api/SolarSystems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SolarSystem>>> GetSolarSystems()
        {
            return await _context.SolarSystems.ToListAsync();
        }

        /*
        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }*/
    }
}
