set dotenv-load

build:
    docker build -t myapp .

run:
    docker run --env-file .env -p $PORT:$PORT myapp

build-and-run: build run
    @echo "Build and run complete"

dev:
    wgo -file=.go -file=.templ -xfile=_templ.go clear :: templ generate :: go run main.go

tailwind:
    tailwindcss build -i static/css/style.css -o static/css/tailwind.css -m
