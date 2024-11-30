import { Component } from '@angular/core';
import { SampleComponent } from '../sample/sample.component';
import { CapitalisePipe } from '../../capitalise.pipe';
// import { from, Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { Observable, of, Subject, takeUntil } from 'rxjs';
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
  dataPromise: Promise<string>;
  dataObservable: Observable<string>
  obseravableStream: Observable<string>;
  private subscription: any;
  obseravableSubscribedStream: number;


  constructor(private myService: ApiService) {
    console.log("Im here in constuctor");
    this.message = myService.getMessage()

    this.dataPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello from promise resolve"), 4000)
    })

    this.dataObservable = of("Hello from observable")

    this.obseravableStream = of("")

    this.obseravableSubscribedStream = 0
  }

  ngOnInit() {
    // console.log(this.message, "message", this.myService.getMessage());

    this.myService
      .fetchPosts('https://jsonplaceholder.typicode.com/todos/')
      .subscribe(
        {
          next: (res) => {
            console.log(res);
            this.items = res.splice(0, 5)

          },
          error: (error) => {
            console.log("Error occured", error.message);

          }
        })

    this.obseravableStream = new Observable<string>(observer => {
      setInterval(() => {
        observer.next(`Current time: ${new Date().toLocaleTimeString()}`)
      }, 1000)
    })

    this.subscription = new Observable<number>(observer => {
      setInterval(() => {
        observer.next(1)
      }, 1000)
    }).subscribe((data) => {
      this.obseravableSubscribedStream = data
    })
    // this.subscription = 



  }


  onDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe()
    }

  }



}
