import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  handleClick = ()=>{
    console.log("clicked")
  }


  showName = ""
  bookName:string = "Clean Code"
  bookAuthor:string = "Robert Cecil"
  bookSrc:string = "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
  bookSrc2:string = "https://images-na.ssl-images-amazon.com/images/I/41nvEPEagML._SX408_BO1,204,203,200_.jpg"
  bookName2:string = "Code Complete 2"
  bookAuthor2:string= "Steve MC Connell"
  isDisabled:Boolean = false;
  
  // handleInput = (event: any)=>{
  //   this.showName = event.target.value
  //   console.log(event.target.value)
  //  }


  constructor() { }

  ngOnInit(): void {
  }

}
