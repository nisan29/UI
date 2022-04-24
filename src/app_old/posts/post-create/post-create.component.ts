import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  @Output() postCreated = new EventEmitter();
  postCreateForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.postCreateForm = this.fb.group({
      enteredTitle: [''],
      enteredContent: ['']
    })
  }

  onAddPost() {
    const post = {
      title: this.postCreateForm.get('enteredTitle').value,
      content: this.postCreateForm.get('enteredContent').value
    }
    this.postCreated.emit(post);
  }
}
