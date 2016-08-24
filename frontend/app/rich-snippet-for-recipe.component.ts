import { Component } from '@angular/core';
import { RichSnippetForRecipe } from './rich-snippet-for-recipe';
import { RICH_SNIPPETS_FOR_RECIPES } from './mock';
import {RichSnippetForRecipeService} from "./rich-snippet-for-recipe.service";

@Component({
    selector: 'rich-snippet-for-recipe',
    templateUrl: 'app/rich-snippet-for-recipe.component.html'
})
export class RichSnippetForRecipeComponent {
    richSnippets: RichSnippetForRecipe[];

    constructor(private richSnippetService: RichSnippetForRecipeService) {}

    saveRichSnippet(snippet) {
        alert('Saving' + JSON.stringify(snippet);
    }

    ngOnInit() {
        let richSnippetService = new RichSnippetForRecipeService();
        this.richSnippets = richSnippetService.getRichSnippets();
    }
}
