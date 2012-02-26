module Main
where
import Test.HUnit
import Robozzle

main = do runTestTT tests

tests = TestList [
         ifShipLiesOnOnlyStarInLevelThenLevelCompletedEvenIfShipDoesNotMove,
         ifStarLiesSomewhereElseAndShipDoesNotMoveThenLevelNotCompleted,
         ifShipMovesOntoOnlyStarInLevelThenLevelCompleted,
         ifShipHitsAllStarsButNotWithinAllowedNumberOfMovesThenLevelNotCompleted,
         nextStateOfShipWithNoCommandLeftToExecuteIsTheSameAsPreviousOne,
         movingShipForward,
         turningShipToRight,
         turningShipToLeft,
         nextStateOfInitialStateWithAnyCommands,
         acceptanceTest
        ]

acceptanceTest = TestList [
                  levelCompleted withinMaxNumberOfMoves startPositions shipCommands ~?= True,
                  levelCompleted (withinMaxNumberOfMoves - 1) startPositions shipCommands ~?= False
                 ]
    where
    withinMaxNumberOfMoves = 9
    startPositions = [(-2, 0), (2, 0)]
    shipCommands = "rffllffff"


ifShipLiesOnOnlyStarInLevelThenLevelCompletedEvenIfShipDoesNotMove =
    levelCompleted 0 [(0, 0)] "" ~?= True

ifStarLiesSomewhereElseAndShipDoesNotMoveThenLevelNotCompleted =
    levelCompleted 1 [(0, 1)] "" ~?= False

ifShipMovesOntoOnlyStarInLevelThenLevelCompleted =
    levelCompleted 1 [(0, 1)] "f" ~?= True

ifShipHitsAllStarsButNotWithinAllowedNumberOfMovesThenLevelNotCompleted =
    levelCompleted 0 [(0, 1)] "f" ~?= False

nextStateOfShipWithNoCommandLeftToExecuteIsTheSameAsPreviousOne =
    nextState (ShipState (0, 1) (0, 12) "") ~?= ShipState (0, 1) (0, 12) ""

movingShipForward = TestList [
    nextState (ShipState (0, 1) (0, 12) "f") ~?= ShipState (0, 1) (0, 13) "",
    nextState (ShipState (0, 1) (0, 12) "ff") ~?= ShipState (0, 1) (0, 13) "f",
    nextState (ShipState (0, -1) (0, 12) "ff") ~?= ShipState (0, -1) (0, 11) "f",
    nextState (ShipState (-1, 0) (18, 12) "f") ~?= ShipState (-1, 0) (17, 12) ""
    ]

turningShipToRight = TestList [
    nextState (ShipState (0, 1) (18, 12) "rrff") ~?= ShipState (1, 0) (18, 12) "rff",
    nextState (ShipState (1, 0) (18, 12) "rff") ~?= ShipState (0, -1) (18, 12) "ff"
    ]


turningShipToLeft = TestList [
    nextState (ShipState (0, 1) (18, 12) "llff") ~?= ShipState (-1, 0) (18, 12) "lff",
    nextState (ShipState (-1, 0) (18, 12) "lff") ~?= ShipState (0, -1) (18, 12) "ff"
    ]


nextStateOfInitialStateWithAnyCommands = 
    nextState (InitialState "rlffff") ~?= ShipState (1, 0) (0, 0) "lffff"