import { Component } from '@angular/core';
import { SampleComponent } from '../sample/sample.component';
import { CapitalisePipe } from '../../capitalise.pipe';
// import { from, Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  imports: [SampleComponent, CapitalisePipe, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [ApiService]
})

export class AboutComponent {
  title = "This is about page"
  // message = ApiService.
  items: any[] = []
  message: string;
  // private destroy$ = new Subject<void>()

  constructor(private myService: ApiService) {
    console.log("Im here in constuctor");
    this.message = myService.getMessage()
  }

  ngOnInit() {
    // console.log(this.message, "message", this.myService.getMessage());
    this.myService
      .fetchPosts('https://jsonplaceholder.typicode.com/todos/')
      .subscribe(
        {
          next: (res) => {
            console.log(res);
            this.items = res

          },
          error: (error) => {
            console.log("Error occured", error.message);

          }
        })

  }



}
