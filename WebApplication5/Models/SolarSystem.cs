using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace WebApplication5.Models
{
    [Table("Solar Systems")]
    public partial class SolarSystem
    {
       public SolarSystem()
        {
            Exoplanets = new HashSet<Exoplanet>();
        }

        [Key]
        [Column("Solar System ID")]
        public int SolarSystemId { get; set; }
        public string Name { get; set; }
        [Column("Binary Stars")]
        public bool? BinaryStars { get; set; }
        [Column("Num Planets")]
        public int? NumPlanets { get; set; }

        
        [InverseProperty(nameof(Exoplanet.SolarSystem))]     
        public virtual ICollection<Exoplanet> Exoplanets { get; set; }
    }
}
