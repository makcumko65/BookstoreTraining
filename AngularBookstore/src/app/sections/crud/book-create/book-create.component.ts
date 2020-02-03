import { Component, OnInit } from '@angular/core';
import { Book} from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Author } from 'src/app/models/author';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book = new Book();
  form: FormGroup = this.formBuilder.group({
    id: [0],
    name: ['', Validators.required],
    longDescription: [''],
    shortDescription: ['', [Validators.required, Validators.pattern('[a-zA-Z]|[a-zA-Z][a-zA-Z0-9-_.]')]],
    amount: [0, [Validators.min(0), Validators.pattern('[0-9]')]],
    year: [0, Validators.min(0)],
    price: [0, [Validators.required, Validators.min(0)]],
    authorId: [0, Validators.required],
    categoryId: [0, Validators.required]
  });
  authors: Author[];
  categories: Category[];
  constructor(private _bookService: BookService, private _router: Router, private _toastr: ToastrService,
    private formBuilder: FormBuilder, private _authorService: AuthorService,
    private _categoryService: CategoryService) { }

  ngOnInit() {
    this._authorService.getAllAuthors()
    .subscribe((data: Author[]) => {
      this.authors = data});
    
    this._categoryService.getAllCategories()
    .subscribe((data: Category[]) => {this.categories = data;});
  }

  save(value: FormGroup){
    this.book = value.value;
    this._bookService.createBook(this.book).subscribe(data => this._router.navigateByUrl("/"),
    error => {
      for(var value in error.error.errors)
      {
        this._toastr.error(error.error.errors[value]);
      }
    });
  }

}
