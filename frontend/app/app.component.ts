import { Component } from '@angular/core';
import { RichSnippetForRecipeComponent } from './rich-snippet-for-recipe.component';

@Component({
  selector: 'rich-snippets-app',
  template: `
<h1>{{title}}</h1>

<rich-snippet-for-recipe></rich-snippet-for-recipe>
`,
    directives: [RichSnippetForRecipeComponent]
})
export class AppComponent {
       title = 'New Rich Snippet for Recipes'
}
