using AutoMapper;
using Bookstore.Core.Entities;
using Bookstore.WebApi.ViewModel;

namespace Bookstore.WebApi.Mapper
{
    public class AutoMapping: Profile
    {
        public AutoMapping()
        {
            CreateMap<Book, BookRequest>();
            CreateMap<BookRequest, Book>();
            CreateMap<Book, BookResponse>();
            CreateMap<ApplicationUserModel, ApplicationUser>().ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));

        }
    }
}
