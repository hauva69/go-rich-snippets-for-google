import { Component } from '@angular/core';
import { RichSnippetForRecipe } from './rich-snippet-for-recipe';
import { RICH_SNIPPETS_FOR_RECIPES } from './mock';

@Component({
    selector: 'rich-snippet-for-recipe',
    templateUrl: 'app/rich-snippet-for-recipe.component.html'
})
export class RichSnippetForRecipeComponent {
    richSnippets: RichSnippetForRecipe[];

    saveRichSnippet() {
        alert("saving");
    }

    ngOnInit() {
        this.richSnippets = RICH_SNIPPETS_FOR_RECIPES;
    }
}
