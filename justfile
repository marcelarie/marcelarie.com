set dotenv-load

build:
    docker build -t myapp .

run:
    docker run --env-file .env -p $PORT:$PORT myapp

build-and-run: build run
    @echo "Build and run complete"
