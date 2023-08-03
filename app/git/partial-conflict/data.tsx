export const CONFLICT = `;; greet : String -> String
;; Generate a greeting for the given individual
(define (greet username)
  (string-append "Hello, @" username "!"))

;; get-avatar-url : String -> String
;; Determines the link to the given individual's avatar
<<<<<<< HEAD
(define (get-avatar-url username)
  (string-append "https://example.com/avatars/" username ".jpg"))
=======
(define (get-avatar-url username)
  (string-append "https://beta.example.com/images/" username ".png"))
>>>>>>> switch-image-host`;
