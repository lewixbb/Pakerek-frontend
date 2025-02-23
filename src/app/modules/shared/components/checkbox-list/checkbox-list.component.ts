import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import {
  CheckboxInputData,
  CheckboxInputDataModel,
} from '../../../core/models/checkboxInputData.model';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss'],
})
export class CheckboxListComponent implements OnInit {
  checkboxes!: FormGroup;
  isActive!: string;
  @Input() inputSubjectData = new Subject<CheckboxInputDataModel[]>();
  // prices: number[] = [];
  // comments: string[] = [];
  data: CheckboxInputData[] = [];
  @Output() inputFeedback = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.checkboxes = this.formBuilder.group({});

    this.inputSubjectData?.subscribe({
      next: (inputSubjectData) => {
        inputSubjectData.forEach((data) => {
          this.checkboxes.addControl(String(data.id), new FormControl(false));
          let comment;
          if (data.deliveryDelay) {
            comment = this.deliveryCommentsBuilder(data.deliveryDelay);
          } else {
            comment = data.comments;
          }
          this.addCheckboxInputData(
            data.id,
            data.name,
            data?.price,
            data?.method,
            data?.deliveryDelay,
            data?.worksWith,
            comment
          );
          // if (typeof data.price !== 'undefined') {
          //   this.prices.push(data.price);
          // }
          // if (data.deliveryDelay) {
          //   this.deliveryMessageBuilder(data.deliveryDelay);
          // }
          // if (data.comments) {
          //   this.comments.push(data.comments);
          // }
        });
      },
    });
  }

  private addCheckboxInputData(
    id: number,
    name: string,
    price?: number,
    method?: string,
    deliveryDelay?: number,
    worksWith?: string[],
    comments?: string
  ) {
    this.data.push(
      new CheckboxInputData(
        id,
        name,
        price,
        method,
        deliveryDelay,
        worksWith,
        comments
      )
    );
  }

  checkboxActivate(checkbox: string) {
    this.isActive = checkbox;
    this.uniqueControlIsActive(checkbox);
    this.inputFeedback.emit(Number(checkbox));
  }

  private uniqueControlIsActive(id: string) {
    for (const checkboxesKey in this.checkboxes.controls) {
      if (checkboxesKey === id) {
        this.checkboxes.get(checkboxesKey)?.setValue(true);
      } else {
        this.checkboxes.get(checkboxesKey)?.setValue(false);
      }
    }
  }

  private deliveryCommentsBuilder(days: number) {
    return (
      'Czas oczekiwania na dostawę od ' +
      days +
      ' do ' +
      (days + 1) +
      ' dni roboczych'
    );
  }

  // private deliveryMessageBuilder(days: number) {
  //   this.comments.push(
  //     'Czas oczekiwania na dostawę od ' +
  //       days +
  //       ' do ' +
  //       (days + 1) +
  //       ' dni roboczych'
  //   );
  // }

  get checkboxesGroup() {
    return Object.keys(this.checkboxes.controls);
  }
}
