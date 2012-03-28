(ns robozzle.test.core
  (:use [clojure.test])
  (:use [robozzle.core ]))

(deftest no-move-with-no-starts-complete-the-level
    (is (level-completed? 0 [] [])))

(deftest no-move-with-one-start-at-initial-position-complete-the-level
    (is (level-completed? 0 [(at 0 0)] [])))

(deftest no-move-with-one-start-off-the-initial-position-doesnt-complete-the-level
    (is (not (level-completed? 0 [(at 1 0)] [] ))))

(deftest move-forward-a-star-within-the-max-movements-complete-the-level
    (is (level-completed? 1 [(at 1 0)] [:forward] )))

(deftest move-up-to-several-stars-within-the-max-movements-complete-the-level
    (is (level-completed? 2 [(at 1 0) (at 2 0)] [:forward :forward])))
