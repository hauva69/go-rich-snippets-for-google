package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/engine/standard"
	"gopkg.in/mgo.v2"
)

const PORT = ":4242"

type Author struct {
	Type string `json:@type`
	Name string `json:"name"`
}

type AggregateRating struct {
	Type        string `json:"@type"`
	RatingValue string `json:"ratingValue"`
	ReviewCount string `json:"reviewCount"`
}

type RecipeRichSnippet struct {
	Context string `json:"@context"`
	Type    string `json:"@type"`
	// The name of the dish
	Name string `json:"name"`
	// The type of dish. For example: appetizer, entree, or dessert.
	RecipeCategory string `json:"recipeCategory"`
	// The URL of the image of the dish being prepared
	ImageUrl string `json:"image"`
	// The date the recipe was published, in the ISO 8601 date format.
	DatePublished string `json:"datePublished"`
	// A short summary describing the dish.
	Description     string          `json:"description"`
	AggregateRating AggregateRating `json:"aggregateRating"`
	// The length of time it takes to prepare the recipe for dish, in ISO 8601 duration format.
	// Can use min, max as child elements to specify a range of time.
	PreparationTime string `json:"prepTime"`
	CookingTime     string `json:"cookTime"`
	TotalTime       string `json:"totalTime"`
}

type ItemReviewed struct {
	Type string `json:"@type"`
	Name string `json:"name"`
}

type ReviewRating struct {
	Type        string `json:"@type"`
	RatingValue string `json:"ratingValue"`
}

type Publisher struct {
	Type string `json:"@type"`
	Name string `json:"name"`
}

type ReviewRichSnippet struct {
	Context      string       `json:"@context"`
	Type         string       `json:"@type"`
	Author       Author       `json:"author"`
	ReviewBody   string       `json:"reviewBody"`
	ReviewRating ReviewRating `json:"reviewRating"`
	ItemReviewed ItemReviewed `json:"itemReviewed"`
}

func teapot(c echo.Context) error {
	return c.String(http.StatusTeapot, "I am a teapot\n")
}

func main() {
	session, err := mgo.Dial("localhost")
	if err != nil {
		log.Print(err)
		panic(err)
	}
	defer session.Close()

	e := echo.New()
	e.Get("/teapot", teapot)
	e.Run(standard.New(PORT))
}
