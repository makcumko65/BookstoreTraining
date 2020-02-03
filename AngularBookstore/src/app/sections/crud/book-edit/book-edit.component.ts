import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/author';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  id: number;
  book: Book;
  loaded: boolean = false;
  form = this.formBuilder.group({
    id: [0],
    name: ['', Validators.required],
    longDescription: ['', Validators.required],
    shortDescription: ['', Validators.required],
    amount: [0, Validators.required],
    year: [0, Validators.required],
    price: [0, Validators.required],
    authorId: [0, Validators.required],
    categoryId: [0, Validators.required]
  });
  authors: Author[];
  categories: Category[];
  constructor(private _bookService: BookService, private _router: Router, activeRoute: ActivatedRoute
    ,private formBuilder: FormBuilder, private _authorService: AuthorService,
    private _categoryService: CategoryService) {
    this.book = new Book();
    this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
   }

  ngOnInit() {
    this._authorService.getAllAuthors()
    .subscribe((data: Author[]) => {
      this.authors = data});
    
    this._categoryService.getAllCategories()
    .subscribe((data: Category[]) => {this.categories = data;});

      this._bookService.getBook(this.id)
        .subscribe((data : Book) => {
          this.book = data;
          if(this.book != null){
          this.form = this.formBuilder.group({
            id: [data.id],
            name: [data.name, Validators.required],
            longDescription: [data.longDescription, Validators.required],
            shortDescription: [data.shortDescription, Validators.required],
            amount: [data.amount, Validators.required],
            year: [data.year, Validators.required],
            price: [data.price, Validators.required],
            authorId: [data.authorId, Validators.required],
            categoryId: [data.categoryId, Validators.required]
          });
          this.loaded = true;
        }
        });
    }
  

  save (){
    console.log("da");
    
    
    console.log(this.form.value);
    this.book = this.form.value;
    this._bookService.editBook(this.book).subscribe(data => this._router.navigateByUrl("/"));
}

}
