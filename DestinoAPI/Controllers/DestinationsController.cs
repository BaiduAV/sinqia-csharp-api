using DestinoAPI.Models;
using DestinoAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace DestinoAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class DestinationsController : ControllerBase
{
    DestinationService _service;

    public DestinationsController(DestinationService service)
    {
        _service = service;
    }
    
    [HttpGet]
    public IEnumerable<Destination> GetAll(int pageNumber)
    {
        return _service.GetAll(pageNumber);
    }

    [HttpGet("{id}")]
    public ActionResult<Destination> GetById(int id)
    {
        var destination = _service.GetById(id);
        
        if (destination is not null)
            return destination;
        
        return NotFound();
    }

    [HttpGet("/search")]
    public IEnumerable<Destination> Search(string filter)
    {
        var filterByLocation = _service.FilteredDestinationByLocation(filter);
        var filterByName = _service.FilteredDestinationByName(filter);
        var searchResults = filterByLocation.Union(filterByName);
        
        return searchResults;
        
    }

    [HttpPost]
    public IActionResult Create(Destination newDestination)
    {
        var destination = _service.Create(newDestination);
        return CreatedAtAction(nameof(GetById), new { id = destination.Id }, destination);
    }
}