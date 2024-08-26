build:
    docker build -t myapp .

run:
    @echo "Running container on port $PORT"
    docker run --env-file .env -p ${PORT}:${PORT} myapp

build-and-run: build run
    @echo "Build and run complete"
