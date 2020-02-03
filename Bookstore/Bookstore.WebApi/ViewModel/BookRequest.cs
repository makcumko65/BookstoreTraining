namespace Bookstore.WebApi.ViewModel
{
    public class BookRequest
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public decimal Price { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }
        public int Amount { get; set; }
        public int AuthorId { get; set; }
        public int CategoryId { get; set; }
    }
}
