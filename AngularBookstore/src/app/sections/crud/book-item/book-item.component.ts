import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  id: number;
  book: Book = new Book();
  constructor(private _bookService: BookService, private _router: Router, activeRoute: ActivatedRoute
    ,private _userService : UserService) {
    this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
   }

  ngOnInit() {
    if(this.id){
      this._bookService.getBook(this.id)
        .subscribe((data : Book) => {
          this.book = data;
        })
    }
    console.log(this.id);
  }

}
