using System.ComponentModel.DataAnnotations;

namespace DestinoAPI.Models;

public class Destination
{
    public int Id { get; set; }

    [Required]
    public string? Name { get; set; }
    
    [Required]
    public string? Address { get; set; }
    
    [Required]
    public string? State { get; set; }
    
    [Required]
    public string? City { get; set; }
    
    [Required]
    [MaxLength(100)]
    public string? Description { get; set; }
    
}