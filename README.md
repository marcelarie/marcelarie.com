# My blog

## Run

If you have [just](https://github.com/casey/just) installed:

```bash
just build-and-run
```

If not just run:

```bash
docker build -t myapp .
docker run --env-file .env -p ${PORT:-8080}:${PORT:-8080} myapp
```
