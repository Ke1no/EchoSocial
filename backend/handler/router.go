package handler

import (
	"github.com/gorilla/mux"
	"net/http"
)

func InitRouter() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/upload", uploadHandler).Methods(http.MethodPost)
	router.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(`{"status":"ok","mode":"scaffold-no-persistence"}`))
	}).Methods(http.MethodGet)
	return router
}
