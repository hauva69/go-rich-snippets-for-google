package main

import (
	"fmt"
)

type Author struct {
	Type string `json:@type`
	Name string `json:"name"`
}

type AggregateRating struct {
	Type string `json:"@type"`
	RatingValue string `json:"ratingValue"`
	ReviewCount string `json:"reviewCount"`
}

type RichSnippet struct {
	Context string `json:"@context"`
	Type string `json:"@type"`
	Name string `json:"name"`
	ImageUrl string `json:"image"`
	DatePublished string `json:"datePublished"`
	Description string `json:"description"`
	AggregateRating AggregateRating `json:"aggregateRating"`
	PreparationTime string `json:"prepTime"`
	CookingTime string `json:"cookTime"`
	TotalTime string `json:"totalTime"`

}

func main() {
	fmt.Println("hello, world")
}