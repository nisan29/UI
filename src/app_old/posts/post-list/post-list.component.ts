import { Component, Input } from "@angular/core";

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  @Input() posts: Array<{title: string, content: string}>;

  remove(index) {
    this.posts.splice(index, 1);
  }
}

