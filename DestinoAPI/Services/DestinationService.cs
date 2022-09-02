using DestinoAPI.Data;
using DestinoAPI.Models;
using Microsoft.EntityFrameworkCore;
using PagedList.Core;

namespace DestinoAPI.Services;

public class DestinationService
{
    private readonly DestinationContext _context;

    public DestinationService(DestinationContext context)
    {
        _context = context;
    }

    public IEnumerable<Destination> GetAll(int page)
    {
        return _context.Destinations
            .AsNoTracking()
            .OrderByDescending(d => d.Id)
            .ToPagedList(page, 4);
    }
    
    public Destination? GetById(int id)
    {
        return _context.Destinations
            .AsNoTracking()
            .SingleOrDefault(p => p.Id == id);
    }

    public Destination Create(Destination newDestination)
    {
        _context.Destinations.Add(newDestination);
        _context.SaveChanges();

        return newDestination;
    }
    
    public IEnumerable<Destination> FilteredDestinationByName(string query)
    {
        IEnumerable<Destination> allEntries = _context.Destinations.AsNoTracking().OrderByDescending(d => d.Id).ToList();
        var filteredList = allEntries.Where(d => d.Name!.ToUpper().Contains(query.ToUpper()));
    
        return filteredList;
    }
    
    public IEnumerable<Destination> FilteredDestinationByLocation(string query)
    {
        IEnumerable<Destination> allEntries = _context.Destinations.AsNoTracking().OrderByDescending(d => d.Id).ToList();
        var filteredList = allEntries.Where(d => d.City!.ToUpper().Contains(query.ToUpper()));
    
        return filteredList;
    }
}