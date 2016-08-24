import { Injectable } from '@angular/core';

import { RICH_SNIPPETS_FOR_RECIPES } from './mock'

@Injectable()
export class RichSnippetForRecipeService {
    getRichSnippets() {
        return RICH_SNIPPETS_FOR_RECIPES;
    }
}
