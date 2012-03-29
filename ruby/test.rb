require "robozzle"
require "test/unit"

class TestRobozzle < Test::Unit::TestCase
  def test_if_ship_lies_on_only_star_in_level_then_level_completed_even_if_ship_does_not_move
    stars = [Point.new(0,0)]
    ship = Ship.at(Point.new(0,0))
    robozzle = Robozzle.new(stars, ship, 0)
    assert(robozzle.is_level_completed)
  end


  def test_if_ship_moves_onto_only_star_in_level_then_level_completed
    stars = [Point.new(0,1)]
    ship = Ship.at(Point.new(0,0))
    robozzle = Robozzle.new(stars, ship, 1)
    ship.forward
    assert(robozzle.is_level_completed)    
  end


  def test_if_star_lies_somewhere_else_and_ship_does_not_move_then_level_not_completed
    stars = [Point.new(0,1)]
    ship = Ship.at(Point.new(0,0))
    robozzle = Robozzle.new(stars, ship, 0)
    assert_equal(false, robozzle.is_level_completed)        
  end


  def test_acceptance
    stars = [Point.new(-2,0), Point.new(2,0)]
    ship = Ship.at(Point.new(0,0))
    robozzle = Robozzle.new(stars, ship, 9)

    ship.
      right.
      forward.
      forward.
      left.
      left.
      forward.
      forward.
      forward.
      forward

    assert(robozzle.is_level_completed)
  end
end



class TestPoint < Test::Unit::TestCase
  def test_is_equal_with_same_x_and_y
    assert_equal(Point.new(2,5) , Point.new(2,5))
  end
end




class TestShip < Test::Unit::TestCase
  def test_moving_ship_forward
    assert_equal(Point.new(0,13), (Ship.at(Point.new(0,12)).north.forward.position));
    assert_equal(Point.new(0,11), (Ship.at(Point.new(0,12)).south.forward.position));
    assert_equal(Point.new(1,12), (Ship.at(Point.new(0,12)).east.forward.position));
    assert_equal(Point.new(-1,12), (Ship.at(Point.new(0,12)).west.forward.position));
  end


  def test_turning_ship_to_left
    assert_equal(Point.new(17,12), (Ship.at(Point.new(18,12)).north.left.forward.position));
    assert_equal(Point.new(18,11), (Ship.at(Point.new(18,12)).north.left.left.forward.position));
  end


  def test_turning_ship_to_right
    assert_equal(Point.new(19,12), (Ship.at(Point.new(18,12)).north.right.forward.position));
    assert_equal(Point.new(18,11), (Ship.at(Point.new(18,12)).north.right.right.forward.position));
  end
end
