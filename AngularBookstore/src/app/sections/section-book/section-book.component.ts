import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/author';
import { Category } from 'src/app/models/category';
import { AuthorService } from 'src/app/services/author.service';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-section-book',
  templateUrl: './section-book.component.html',
  styleUrls: ['./section-book.component.css']
})
export class SectionBookComponent implements OnInit {

  constructor(private _bookService: BookService, private _authorService: AuthorService
    ,private _categoryService: CategoryService,private toastr: ToastrService
    ,private _userService : UserService) { }

  book: Book = new Book();
  author: Author = new Author();
  books: Book[];
  authors: Author[];
  categories: Category[];
  tableMode: boolean = true; 

  ngOnInit() {
    this._authorService.getAllAuthors()
    .subscribe((data: Author[]) => {
      this.authors = data});
    
    this._categoryService.getAllCategories()
    .subscribe((data: Category[]) => {this.categories = data;});

    this.getAllBooks();
  }

  save() {
    if (this.book.id == null) {
        this._bookService.createBook(this.book)
            .subscribe((data: Book) => {
              this.books.push(data);
              this.cancel();}
              , error => {
                console.log(error.error);
                this.toastr.error(error.error.Name);
              }
              
            
              );
    } else {
        this._bookService.editBook(this.book)
            .subscribe(data => this.getAllBooks());
            this.cancel();
    }
}

  getAllBooks(): void{
    this._bookService.getAllBooks()
      .subscribe((res : Book[])=> {
        this.books = res;
      });
  }
  editBook(b: Book) {
    this.book = b;
}

  createBook(){
    this.cancel();
    this.tableMode = false;
  }

  cancel() {
    this.book = new Book();
    this.tableMode = true;
  }
  
  delete(book: Book) {
    this._bookService.deleteBook(book.id)
        .subscribe(data => this.getAllBooks());
  }

}
