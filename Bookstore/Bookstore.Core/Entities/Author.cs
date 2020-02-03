using Bookstore.Core.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Core.Entities
{
    public class Author: BaseEntity
    {
        public Author()
        {
            Books = new List<Book>();
        }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IList<Book> Books { get; set; }
    }
}
