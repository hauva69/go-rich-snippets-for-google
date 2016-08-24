import { Component } from '@angular/core';

@Component({
  selector: 'rich-snippets-app',
  template: `<h1>{{title}}</h1>

<img [src]="richSnippetForRecipe.imageUrl" width="800px">
<h2>Name: {{richSnippetForRecipe.name}}</h2>
<p>Recipe category: {{richSnippetForRecipe.recipeCategory}}</p>
<p>Published: {{richSnippetForRecipe.datePublished}}</p>
<p>{{richSnippetForRecipe.description}}</p>

<ul>
<li>Preparation time: {{richSnippetForRecipe.preparationTime}}</li>
<li>Cooking time: {{richSnippetForRecipe.cookingTime}}</li>
<li>Total time: {{richSnippetForRecipe.totalTime}}</li>
</ul>
`
})
export class AppComponent {
       title = 'New Rich Snippet for Recipes'

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
