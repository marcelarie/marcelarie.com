FROM golang:1.23.0-alpine3.20 AS builder

WORKDIR /app

# TODO: Write and use apt install just 

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -o myapp .

FROM alpine:edge

WORKDIR /app

COPY --from=builder /app/myapp .

# Set the timezone and install CA certificates
RUN apk --no-cache add ca-certificates tzdata

ENTRYPOINT ["/app/myapp"]
