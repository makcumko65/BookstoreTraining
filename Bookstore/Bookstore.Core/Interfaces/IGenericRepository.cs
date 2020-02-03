using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Core.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetById(object id);
        Task Create(T obj);
        Task Update(T obj);
        Task Delete(object id);
        Task Save();
        bool BookExists(int id);


    }
}
