package main

import (
	"embed"
	"fmt"
	"net/http"

	"github.com/a-h/templ"
	"github.com/marcelarie/marcelarie.com/components/index"
)

var static embed.FS

func main() {

	http.Handle("/", templ.Handler(components.Index()))
	http.Handle("/static/", http.FileServer(http.FS(static)))


	fmt.Println("Listening on http://localhost:3000")
	http.ListenAndServe(":3000", nil)
}
