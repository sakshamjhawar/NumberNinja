import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListComponent } from './question-list.component';
import { QuestionService } from '../service/question-service';

describe('QuestionListComponent', () => {
  let component: QuestionListComponent;
  let fixture: ComponentFixture<QuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ QuestionService ],
      declarations: [ QuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
