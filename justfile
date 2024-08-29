build:
    docker build -t myapp .

run:
    export $(cat .env | xargs)
    @echo "Running on port ${PORT:-8080}"
    docker run --rm --env-file .env -p ${PORT:-8080}:${PORT:-8080} myapp

build-and-run: build run
    @echo "Build and run complete"
