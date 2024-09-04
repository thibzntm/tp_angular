import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  selectCategory(categoryId: number) {
    console.log(categoryId);
    this.router.navigate(['/quiz', categoryId]);
  }
}
