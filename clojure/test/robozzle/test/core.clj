(ns robozzle.test.core
  (:use [clojure.test])
  (:use [robozzle.core ]))

(deftest no-move-with-no-starts-complete-the-level
  (is (level-completed? 0 [] [])))

(deftest no-move-with-one-start-at-initial-position-complete-the-level
  (is (level-completed? 0 [(at 0 0)] [])))

(deftest no-move-with-one-start-off-the-initial-position-doesnt-complete-the-level
  (is (not (level-completed? 0 [(at 1 0)] [] ))))

(deftest move-forward-a-star-within-the-max-command-number-complete-the-level
  (is (level-completed? 1 [(at 1 0)] [:forward] )))

(deftest move-up-to-several-stars-within-the-max-command-number-complete-the-level
  (is (level-completed? 2 [(at 1 0) (at 2 0)] [:forward :forward])))

(deftest move-above-the-max-command-number-doesnt-complete-the-level
  (is (not (level-completed? 1 [(at 1 0) (at 2 0)] [:forward :forward]))))

(deftest move-without-max-command-number-doesnt-complete-the-level
  (is (not (level-completed? 0 [] [:forward]))))

(deftest move-forward-and-left-against-starts-complete-the-level
  (is (level-completed? 5 [(at 1 2) (at 1 0)] [:forward :left :forward :forward])))

(deftest move-forward-and-right-against-starts-complete-the-level
  (is (level-completed? 5 [(at 1 -2) (at 1 0)] [:forward :right :forward :forward])))

(deftest move-forward-and-backward-against-starts-complete-the-level
  (is (level-completed? 5 [(at -1 0) (at 1 0)] [:forward :left :left :forward :forward])))

