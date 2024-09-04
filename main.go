package main

import (
	"fmt"
	"net/http"

	"github.com/a-h/templ"
	"github.com/marcelarie/marcelarie.com/hello"
)

func main() {
	component := hello.Hello("Marcel")

	http.Handle("/", templ.Handler(component))

	fmt.Println("Listening on http://localhost:3000")
	http.ListenAndServe(":3000", nil)
}
