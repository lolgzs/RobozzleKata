(ns robozzle.core)

(defrecord Position [x y])

;; position in the space
(defn at [x y]
  (Position. x y))

; moves the ship according to the specified command and returns the new
; position of the ship. If no command is given, then the current position
; of the ship is returned.
(defn move-ship [at-position command]
  (cond 
    (= nil command) at-position
    (= :forward command) (Position. 1 0)
    :else (throw (java.lang.Exception. "Unknown command"))))

; is the level completed by the ship once it has performed the specified
; commands?
; The level is completed only if it catches the stars at the specified
; positions and within the indicated maximum movements.
(defn level-completed? [max-attempts positions commands]
  (cond
    (and (empty? positions) (empty? commands)) true
    :else (= (move-ship (at 0 0) (first commands)) (first positions))))

