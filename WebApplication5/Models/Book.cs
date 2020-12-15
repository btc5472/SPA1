using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace WebApplication5.Models
{
    // [Index(nameof(AuthorId), Name = "IX_Books_AuthorId")]
    public partial class Book
    {
        [Key]
        public int BookId { get; set; }
        public int AuthorId { get; set; }
        public string Title { get; set; }

        [ForeignKey(nameof(AuthorId))]
        [InverseProperty("Books")]
        public virtual Author Author { get; set; }
    }
}
