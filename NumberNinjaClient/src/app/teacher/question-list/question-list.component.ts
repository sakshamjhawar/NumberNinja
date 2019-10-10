import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { HttpService } from "../../shared/http.services";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../../shared/user.service';
import { QuestionService } from '../service/question-service';
import { MatDialog } from '@angular/material';
import { QuestionComponent } from '../question/question.component';
import { Question } from '../model/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  
  private displayedColumns: String[] = ['question', 'questiontype', 'action'];
  private questionList :Question[] = null;
  private dataSource = new MatTableDataSource<Question>(this.questionList);


  isPopupOpened = false;

  constructor(private dialog?: MatDialog,
    private questionService?: QuestionService) { }

  ngOnInit() {
    console.log("in iNiT");
    var userData = this.questionService.getQuestions().subscribe((data: any) => {
      console.log("Testing:" + data +".");
      if (data && data != undefined && data.length) {
        console.log("Inside");
        this.dataSource = new MatTableDataSource<Question>(data);
      }
  });
}

  addQuestion() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(QuestionComponent, {
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  editQuestion(question: Question) {
    this.isPopupOpened = true;
    const currentQuestion = this.questionService.getAllQuestion().find(index => index.id === question.id);
    const dialogRef = this.dialog.open(QuestionComponent, {
      data: currentQuestion
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  deleteQuestion(id: number) {
    this.questionService.deleteQuestion(id);
  }
}
