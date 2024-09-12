set dotenv-load

dev: 
    pnpm run dev & PID=$! && sleep 5 && firefox -new-tab "http://localhost:$PORT" && trap "kill $PID" SIGINT SIGTERM EXIT && wait $PID

build: 
    pnpm run build


