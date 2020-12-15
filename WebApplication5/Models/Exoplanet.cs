using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace WebApplication5.Models
{
    public partial class Exoplanet
    {
        [Key]
        [Column("Exoplanet ID")]
        public int ExoplanetId { get; set; }
        public string Name { get; set; }
        [Column("Num Moons")]
        public int? NumMoons { get; set; }
        public bool Life { get; set; }
        [Column("Solar System ID")]
        public int? SolarSystemId { get; set; }

        [ForeignKey(nameof(SolarSystemId))]
        [InverseProperty("Exoplanets")]
        public virtual SolarSystem SolarSystem { get; set; }
    }
}
