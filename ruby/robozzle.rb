class Point
  attr_reader :x, :y

  def initialize(x,y)
    @x = x
    @y = y
  end


  def ==(p) 
    (@x == p.x) and (@y == p.y)
  end
end




class Ship
  attr_reader :positions

  def Ship.at(position)
    Ship.new.at(position)
  end


  def initialize
    @positions = []
  end

  
  def at(position)
    @positions << position
    self
  end

p
  def forward
    at(Point.new(0,1))
  end
end




class Robozzle
  def initialize(stars, ship, number_of_moves)
    @stars = stars
    @ship = ship
    @number_of_moves = number_of_moves
  end


  def is_level_completed
    (@stars.reject {|p| @ship.positions.include?(p)}).empty?
  end
end


