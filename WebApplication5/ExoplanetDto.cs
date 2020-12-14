using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication5
{
    public class ExoplanetDto
    {
        public int ExoplanetId { get; set; }
        public string Name { get; set; }
        public int? NumMoons { get; set; }
        public bool Life { get; set; }
        public string SolarSystemName { get; set; }
    }
}
