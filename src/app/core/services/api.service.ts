import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',

})

export class ApiService {
  private apiUrl = "";

  constructor(private http: HttpClient) { }

  getMessage(): string {
    return 'Hello Hello Hello!';
  }

  // fetchItems() {
  //   return this.http.get<[]>(this.apiUrl).pipe(
  //     map((data) => data.map(item => {
  //       console.log(item);
  //     })),
  //     catchError((error) => {
  //       console.log("error in fetching data", error);
  //       return of([])
  //     })

  //   )
  // }
  fetchPosts(apiUrl: string): Observable<any[]> {
    return this.http.get<any[]>(apiUrl); // Returns an observable
  }

}
