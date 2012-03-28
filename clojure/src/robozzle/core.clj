(ns robozzle.core)

; A position is defined by its coordinates in the space
(defrecord Position [x y])

; A space ship is defined by its path in the space
(defrecord SpaceShip [movement])

;; Position in the space
(defn at [x y]
  (Position. x y))

; Moves the specified ship to the specified position and returns the ship with
; its updated position.
(defn move-ship [ship to-position]
  (SpaceShip. (conj (:movement ship) to-position)))

; Applies the specified command to the given space ship and returns the ship
; updated with its new position.
; If no command is given, then the current position
; of the ship is returned.
(defn command-ship [ship command]
  (let [position (peek (:movement ship))]
    (cond 
      (= nil command)      ship
      (= :forward command) (move-ship ship (at (+ (:x position) 1) (:y position)))
      :else (throw (java.lang.Exception. "Unknown command")))))

; Computes the travel path of a ship in the space starting from the specified
; initial position and by applying to it the specified ship commands
(defn ship-trail [initial-position commands]
  (:movement (reduce command-ship (SpaceShip. [initial-position]) commands)))

; Is the level completed by the ship once it has performed the specified
; commands?
; The level is completed only if it catches the stars at the specified
; positions and within the given number of maximum movements.
(defn level-completed? [max-movements positions commands]
    (empty? (clojure.set/difference (into #{} positions) (into #{} (ship-trail (at 0 0) commands)))))
