using Bookstore.Core.Entities;
using Bookstore.Core.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bookstore.Core.Service
{
    public class BookService : IBookService
    {
        private readonly IGenericRepository<Book> _repository;

        public BookService(IGenericRepository<Book> repository)
        {
            _repository = repository;
        }
        public async Task<IEnumerable<Book>> GetAllBooksAsync()
        {
            return await _repository.GetAll();
        }

    }
}
