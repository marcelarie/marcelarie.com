set dotenv-load

dev:
    pnpm run dev & PID=$! && \
    sleep 2 && \
    chromium --new-tab "http://localhost:$PORT" 2>/dev/null && \
    trap "kill $PID" SIGINT SIGTERM EXIT && \
    wait $PID

build: 
    pnpm run build

test: 
    pnpm run test
