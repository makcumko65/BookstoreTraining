import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(){
    return this.http.get<Book[]>(environment.apiBaseURI + '/book/get');
  }

  getBook(id: number){
    return this.http.get(environment.apiBaseURI + '/book/' + id)  
  }

  createBook(book: Book) {
    return this.http.post(environment.apiBaseURI + '/book/createbook', book);
  }

  editBook(book: Book) {  
    return this.http.put(environment.apiBaseURI + '/book/' + book.id, book);
  }

  deleteBook(id: number) {
    return this.http.delete(environment.apiBaseURI + '/book/' + id);
  }
}
