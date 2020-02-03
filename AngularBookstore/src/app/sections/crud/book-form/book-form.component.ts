import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/author';
import { Category } from 'src/app/models/category';
import { AuthorService } from 'src/app/services/author.service';
import { CategoryService } from 'src/app/services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input() book: Book;

  constructor(private _authorService: AuthorService
    ,private _categoryService: CategoryService
    ,private formBuilder: FormBuilder) {
     }

  @Input() authors: Author[];
  @Input() categories: Category[];

  ngOnInit() {
    console.log();
    this._authorService.getAllAuthors()
    .subscribe((data: Author[]) => {
      this.authors = data});
    
    this._categoryService.getAllCategories()
    .subscribe((data: Category[]) => {this.categories = data;});
  }

}
