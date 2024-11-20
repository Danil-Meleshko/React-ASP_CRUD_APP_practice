using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Student
    {
        [Key]
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public bool IsActive { get; set; }
    }
}
