using Bookstore.Core.Interfaces;
using Bookstore.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Core.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class

    {
        private BookstoreDbContext _context = null;
        private DbSet<T> table = null;

        public GenericRepository(BookstoreDbContext _context)
        {
            this._context = _context;
            table = _context.Set<T>();
        }
        public async Task<IEnumerable<T>> GetAll()
        {
            return await table.ToListAsync();
        }
        public async Task<T> GetById(object id)
        {
            return await table.FindAsync(id);
        }
        public async Task Create(T obj)
        {
            await table.AddAsync(obj);
            await Save();

        }
        public async Task Update(T obj)
        {
            table.Attach(obj);
            _context.Entry(obj).State = EntityState.Modified;
            await Save();

        }
        public async Task Delete(object id)
        {
            T existing = table.Find(id);
            table.Remove(existing);
            await Save();
        }

        public bool BookExists(int id)
        {
            T existing = table.Find(id);
            if (existing == null)
                return false;
            return true;
        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }

    }
}
