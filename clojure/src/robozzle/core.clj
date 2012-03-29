(ns robozzle.core)

;; A position is defined by its coordinates in the space
(defrecord Position [x y])

;; A space ship is defined by its path in the space and by a direction
(defrecord SpaceShip [direction movement])

;; Position in the space
(defn at [x y]
  (Position. x y))

;; Computes the direction by applying to the specified
;; direction a turn either at left (:left) or at right (:right)
(defn direction [direction turn]
  (cond
    (= direction :left)
      (cond
        (= turn :left) :bottom
        (= turn :right) :top)
    (= direction :right)
      (cond
        (= turn :left) :top
        (= turn :right) :bottom)
    (= direction :top)
      (cond
        (= turn :left) :left
        (= turn :right) :right)
    (= direction :bottom)
      (cond
        (= turn :left) :right
        (= turn :right) :left)))

;; Fowards one step from a new position from a given position and a direction
(defn forward [position direction]
  (cond
    (= :left direction) (at (- (:x position) 1) (:y position))
    (= :right direction) (at (+ (:x position) 1) (:y position))
    (= :top direction) (at (:x position) (+ (:y position) 1))
    (= :bottom direction) (at (:x position) (- (:y position) 1))))

;; Moves the specified ship to the specified position and returns the ship with
;; its updated position.
(defn move-ship [ship to-position]
  (SpaceShip. (:direction ship) (conj (:movement ship) to-position)))

(defn rotate-ship [ship turn]
  (SpaceShip. (direction (:direction ship) turn) (:movement ship)))

;; Applies the specified command to the given space ship and returns the ship
;; updated with its new position.
;; If no command is given, then the current position
;; of the ship is returned.
(defn command-ship [ship command]
  (let [position (peek (:movement ship)) direction (:direction ship)]
    (cond 
      (= nil command) ship
      (= :forward command) (move-ship ship (forward position direction))
      (or (= :right command) (= :left command)) (rotate-ship ship command)
      :else (throw (java.lang.Exception. "Unknown command")))))

;; Computes the travel path of a ship in the space starting from the specified
;; initial position and by applying to it the specified ship commands
(defn ship-trail [initial-position  initial-direction commands]
  (:movement (reduce command-ship (SpaceShip. initial-direction [initial-position]) commands)))

;; Is the level completed by the ship once it has performed the specified
;; commands?
;; The game is initialized with a given maximum number of commands and the
;; specified positions of starts. The level is completed when passing the
;; given commands to the star ship all starts are catched.
(defn level-completed? [max-command-number positions commands]
  (cond
    (< max-command-number (count commands)) false
    :else (empty? (clojure.set/difference (into #{} positions) (into #{} (ship-trail (at 0 0) :right commands))))))
