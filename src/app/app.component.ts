import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(public dialog: MatDialog, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get("assets/FILMES.JSON").subscribe(data => {
      this.movies = data;
    });
  }

  movies: any = [];
  title = 'filmes';
  layout = sessionStorage.getItem('layout') || 'grid';

  openDialog(i:any): void {
    this.dialog.open(MovieDialogComponent, {
      data: this.movies[i]
    });
  }

  alteraLayout(layout:string): void {
    this.layout = layout;
    sessionStorage.setItem('layout',layout);
  }

  verificaLayout(tipo: string): boolean {
    if (tipo == this.layout) { return true; }
    else { return false; }
  }
}
