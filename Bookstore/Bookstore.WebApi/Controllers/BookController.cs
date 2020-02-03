using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Bookstore.Core.Entities;
using Bookstore.Core.Interfaces;
using Bookstore.WebApi.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Bookstore.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;
        private readonly IGenericRepository<Book> _bookRepository;
        private readonly IMapper _mapper;

        public BookController(IBookService bookService, IGenericRepository<Book> bookRepository
            , IMapper mapper)
        {
            _bookService = bookService;
            _bookRepository = bookRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("Get")]
        public async Task<IEnumerable<Book>> Get()
        {
            var books = await _bookService.GetAllBooksAsync();
            return books;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BookResponse>> GetBook(int id)
        {
            var book = await _bookRepository.GetById(id);
            
            if (book == null)
                return NotFound();
            var bookResponse = _mapper.Map<BookResponse>(book);
            
            return bookResponse;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, [FromBody]BookRequest bookModel)
        {
            if (id != bookModel.Id)
                return BadRequest();
            var book = _mapper.Map<Book>(bookModel);
            try
            {
                await _bookRepository.Update(book);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_bookRepository.BookExists(book.Id))
                {
                    return NotFound();
                }
            }
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Book>> DeleteBook(int id)
        {
            var book = await _bookRepository.GetById(id);
            if(book == null)
            {
                return NotFound();
            }

            await _bookRepository.Delete(book.Id);

            return book;
        }

        [HttpPost]
        [Route("createbook")]
        public async Task<ActionResult> Post([FromBody]BookRequest bookModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var book = _mapper.Map<Book>(bookModel);
            try
            {
                await _bookRepository.Create(book);
            }
            catch(Exception ex)
            {
                ModelState.AddModelError("Message", $"{ex.Message}");
                return BadRequest(ModelState);
            }
            
            return Ok(book);
        }
    }
}