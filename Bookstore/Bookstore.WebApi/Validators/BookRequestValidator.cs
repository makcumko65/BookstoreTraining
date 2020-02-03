using Bookstore.WebApi.ViewModel;
using FluentValidation;

namespace Bookstore.WebApi.Validators
{
    public class BookRequestValidator : AbstractValidator<BookRequest>
    {
        public BookRequestValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .NotNull();

            RuleFor(x => x.Amount)
                .GreaterThan(0);

            RuleFor(x => x.Price)
                .GreaterThan(0);

            RuleFor(x => x.Year)
                .GreaterThan(0);
        }
    }
}
