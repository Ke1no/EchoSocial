package handler

import (
	"net/http/httptest"
	"strings"
	"testing"
)

func TestUploadContract(t *testing.T) {
	cases := []struct {
		name, method, contentType, body string
		status                          int
	}{
		{"valid", "POST", "application/json", `{"id":"1","user":"demo","message":"Hello","url":"","type":"image"}`, 200},
		{"malformed", "POST", "application/json", `{`, 400},
		{"empty", "POST", "application/json", `{"message":" "}`, 400},
		{"extra JSON", "POST", "application/json", `{"message":"Hello"} {}`, 400},
		{"unknown field", "POST", "application/json", `{"message":"Hello","admin":true}`, 400},
		{"content type", "POST", "text/plain", `{"message":"Hello"}`, 415},
		{"method", "GET", "application/json", ``, 405},
		{"size limit", "POST", "application/json", `{"message":"` + strings.Repeat("x", 70<<10) + `"}`, 413},
	}
	for _, c := range cases {
		t.Run(c.name, func(t *testing.T) {
			r := httptest.NewRequest(c.method, "/upload", strings.NewReader(c.body))
			r.Header.Set("Content-Type", c.contentType)
			w := httptest.NewRecorder()
			InitRouter().ServeHTTP(w, r)
			if w.Code != c.status {
				t.Fatalf("got %d, want %d: %s", w.Code, c.status, w.Body.String())
			}
			if c.status == 200 && w.Body.String() != "Post received: Hello\n" {
				t.Fatal(w.Body.String())
			}
		})
	}
}
