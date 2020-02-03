using Bookstore.Core.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Bookstore.Infrastructure.Data
{
    public class BookstoreDbContext: IdentityDbContext<ApplicationUser>
    {
        public BookstoreDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var connectionString = "Server=(localdb)\\MSSQLLocalDB; Database=BookstoreDb; Integrated Security=True;";

                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Author>().HasData(
                    new Author
                    {
                        Id = 1,
                        FirstName = "Elizabeth",
                        LastName = "Gilbert"
                    },
                    new Author
                    {
                        Id = 2,
                        FirstName = "Alex",
                        LastName = "Michaelides"
                    },
                      new Author
                      {
                          Id = 3,
                          FirstName = "Jayson",
                          LastName = "Greene"
                      },
                    new Author
                    {
                        Id = 4,
                        FirstName = "Jennifer",
                        LastName = "Weiner"
                    },
                     new Author
                     {
                         Id = 5,
                         FirstName = "Yangsze",
                         LastName = "Choo"
                     },
                     new Author
                     {
                         Id = 6,
                         FirstName = "Taylor",
                         LastName = "Jenkins Reid"
                     });

            builder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "Novel" },
                new Category { Id = 2, Name = "Thriller" },
                new Category { Id = 3, Name = "Memoir" }
                );

            builder.Entity<Book>().HasData(
                new Book { Id = 1, Name = "City of Girls",Year = 1911,Price = 100, AuthorId = 1, CategoryId = 1,
                    Amount = 13,
                    ShortDescription = "A book is a medium for recording information in the form of writing or images", LongDescription = "A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (in the plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."},
                new Book { Id = 2, Name = "The Silent Patient", Year = 1991, Price = 400, AuthorId = 2, CategoryId = 2,
                    Amount = 3,
                    ShortDescription = "A book is a medium for recording information in the form of writing or images",
                    LongDescription = "A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (in the plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."
                },
                new Book { Id = 3, Name = "Once More We Saw Stars", Year = 2005, Price = 500, AuthorId = 3, CategoryId = 3,
                    Amount = 3,
                    ShortDescription = "A book is a medium for recording information in the form of writing or images",
                    LongDescription = "A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (in the plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."                },
                new Book { Id = 4, Name = "Mrs. Everything", Year = 1971, Price = 2000, AuthorId = 4, CategoryId = 1,
                    Amount = 1,
                    ShortDescription = "A book is a medium for recording information in the form of writing or images",
                    LongDescription = "A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (in the plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."                },
                new Book { Id = 5, Name = "The Night Tiger", Year = 1981, Price = 20, AuthorId = 5, CategoryId = 1,
                    Amount = 3,
                    ShortDescription = "A book is a medium for recording information in the form of writing or images",
                    LongDescription = "A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (in the plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."                },
                new Book { Id = 6, Name = "Daisy Jones & The Six", Year = 2000, Price = 200, AuthorId = 6, CategoryId = 1,
                    Amount = 2,
                    ShortDescription = "A book is a medium for recording information in the form of writing or images",
                    LongDescription = "A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (in the plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."                }
            );
        }
    }
}
