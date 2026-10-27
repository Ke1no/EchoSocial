package main

import (
	"log"
	"net/http"
	"os"
	"socialai/handler"
	"time"
)

func main() {
	addr := os.Getenv("LISTEN_ADDR")
	if addr == "" {
		addr = "127.0.0.1:8080"
	}
	server := &http.Server{Addr: addr, Handler: handler.InitRouter(), ReadHeaderTimeout: 5 * time.Second, ReadTimeout: 15 * time.Second, WriteTimeout: 15 * time.Second, IdleTimeout: 60 * time.Second}
	log.Printf("EchoSocial scaffold listening on %s (no persistence)", addr)
	log.Fatal(server.ListenAndServe())
}
