using Bookstore.Core.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Core.Entities
{
    public class Category : BaseEntity
    {
        public Category()
        {
            Books = new List<Book>();
        }

        public string Name { get; set; }
        public IList<Book> Books { get; set; }
    }
}
