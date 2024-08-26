My blog

# Run

If you have just installed:

```bash
just build-and-run
```

If not just run:

```bash
docker build -t myapp .
docker run --env-file .env -p $PORT:$PORT myapp
```
