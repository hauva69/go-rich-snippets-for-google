import { Component } from '@angular/core';

@Component({
    selector: 'rich-snippet-for-recipe',
    templateUrl: 'app/rich-snippet-for-recipe.component.html'
})
export class RichSnippetForRecipeComponent {
    richSnippetForRecipe = {
        'name': 'Ginger Pork Donburi',
        'recipeCategory': 'entree',
        'imageUrl': 'https://c1.staticflickr.com/2/1565/26263100680_15298ae98e_k.jpg',
        'datePublished': '2016-04-20',
        'description': 'Japanese donburi i.e. rice in a bowl with ginger pork topping.',
        'aggregateRating': 0,
        'preparationTime': '15 minutes',
        'cookingTime': '1 hour',
        'totalTime': '1 hour 15 minutes'
    }
}
