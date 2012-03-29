class Point
  attr_reader :x, :y

  def initialize(x,y)
    @x = x
    @y = y
  end


  def +(p)
    Point.new(@x + p.x, @y + p.y)
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
    self.north
  end

  
  def at(position)
    @positions << position
    self
  end


  def position
    @positions.last
  end


  def forward
    at(self.position + @translation)
  end


  def north
    @translation = Point.new(0,1)
    self
  end


  def south
    @translation = Point.new(0,-1)
    self
  end


  def east
    @translation = Point.new(1,0)
    self
  end


  def west
    @translation = Point.new(-1,0)
    self
  end


  def left
    @translation = Point.new(-@translation.y, @translation.x)
    at(self.position)
  end


  def right
    @translation = Point.new(@translation.y, -@translation.x)
    at(self.position)
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


