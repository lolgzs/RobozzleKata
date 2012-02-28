smalltalk.addPackage('Robozzle', {});
smalltalk.addClass('RobozzleTest', smalltalk.TestCase, [], 'Robozzle');
smalltalk.addMethod(
unescape('_testAcceptanceTest'),
smalltalk.method({
selector: unescape('testAcceptanceTest'),
category: 'tests',
fn: function (){
var self=this;
var robozzle=nil;
var ship=nil;
(ship=smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(0)])]));
(robozzle=smalltalk.send((smalltalk.Robozzle || Robozzle), "_stars_ship_numberOfMoves_", [[smalltalk.send(smalltalk.send((2), "_negated", []), "__at", [(0)]),smalltalk.send((2), "__at", [(0)])], ship, (9)]));
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ship, "_right", []), "_forward", []), "_forward", []), "_left", []), "_left", []), "_forward", []), "_forward", []), "_forward", []), "_forward", []);
smalltalk.send(self, "_assert_", [smalltalk.send(robozzle, "_isLevelCompleted", [])]);
return self;},
args: [],
source: unescape('testAcceptanceTest%0D%09%7C%20robozzle%20ship%20%7C%0D%09ship%20%3A%3D%20RShip%20at%3A0@0.%0D%09robozzle%20%3A%3D%20Robozzle%20stars%3A%20%7B2%20negated@0.%20%202@0%7D%20ship%3A%20ship%20numberOfMoves%3A%209.%0D%09ship%20%0D%09%09right%20%0D%09%09forward%20%0D%09%09forward%20%0D%09%09left%20%0D%09%09left%20%0D%09%09forward%20%0D%09%09forward%20%0D%09%09forward%20%0D%09%09forward.%0D%09self%20assert%3A%20robozzle%20isLevelCompleted.'),
messageSends: ["at:", unescape("@"), "stars:ship:numberOfMoves:", "negated", "forward", "left", "right", "assert:", "isLevelCompleted"],
referencedClasses: ["RShip", "Robozzle"]
}),
smalltalk.RobozzleTest);

smalltalk.addMethod(
unescape('_testIfShipLiesOnOnlyStarInLevelThenLevelCompletedEvenIfShipDoesNotMove'),
smalltalk.method({
selector: unescape('testIfShipLiesOnOnlyStarInLevelThenLevelCompletedEvenIfShipDoesNotMove'),
category: 'tests',
fn: function (){
var self=this;
var robozzle=nil;
(robozzle=smalltalk.send((smalltalk.Robozzle || Robozzle), "_stars_ship_numberOfMoves_", [[smalltalk.send((0), "__at", [(0)])], smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(0)])]), (0)]));
smalltalk.send(self, "_assert_", [smalltalk.send(robozzle, "_isLevelCompleted", [])]);
return self;},
args: [],
source: unescape('testIfShipLiesOnOnlyStarInLevelThenLevelCompletedEvenIfShipDoesNotMove%0D%09%7C%20robozzle%20%7C%0D%09robozzle%20%3A%3D%20Robozzle%20stars%3A%20%7B0@0%7D%20ship%3A%20%28RShip%20at%3A%200@0%29%20numberOfMoves%3A%200.%20%0D%09self%20assert%3A%20robozzle%20isLevelCompleted.'),
messageSends: ["stars:ship:numberOfMoves:", unescape("@"), "at:", "assert:", "isLevelCompleted"],
referencedClasses: ["Robozzle", "RShip"]
}),
smalltalk.RobozzleTest);

smalltalk.addMethod(
unescape('_testIfShipMovesOntoOnlyStarInLevelThenLevelCompleted'),
smalltalk.method({
selector: unescape('testIfShipMovesOntoOnlyStarInLevelThenLevelCompleted'),
category: 'tests',
fn: function (){
var self=this;
var robozzle=nil;
var ship=nil;
(ship=smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(0)])]));
(robozzle=smalltalk.send((smalltalk.Robozzle || Robozzle), "_stars_ship_numberOfMoves_", [[smalltalk.send((0), "__at", [(1)])], ship, (1)]));
smalltalk.send(ship, "_forward", []);
smalltalk.send(self, "_assert_", [smalltalk.send(robozzle, "_isLevelCompleted", [])]);
return self;},
args: [],
source: unescape('testIfShipMovesOntoOnlyStarInLevelThenLevelCompleted%0D%09%7C%20robozzle%20ship%20%7C%0D%09ship%20%3A%3D%20RShip%20at%3A0@0.%0D%09robozzle%20%3A%3D%20Robozzle%20stars%3A%20%7B0@1%7D%20ship%3A%20ship%20numberOfMoves%3A%201.%20%0D%09ship%20forward.%0D%09self%20assert%3A%20robozzle%20isLevelCompleted.'),
messageSends: ["at:", unescape("@"), "stars:ship:numberOfMoves:", "forward", "assert:", "isLevelCompleted"],
referencedClasses: ["RShip", "Robozzle"]
}),
smalltalk.RobozzleTest);

smalltalk.addMethod(
unescape('_testIfStarLiesSomewhereElseAndShipDoesNotMoveThenLevelNotCompleted'),
smalltalk.method({
selector: unescape('testIfStarLiesSomewhereElseAndShipDoesNotMoveThenLevelNotCompleted'),
category: 'tests',
fn: function (){
var self=this;
var robozzle=nil;
(robozzle=smalltalk.send((smalltalk.Robozzle || Robozzle), "_stars_ship_numberOfMoves_", [[smalltalk.send((0), "__at", [(1)])], smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(0)])]), (0)]));
smalltalk.send(self, "_deny_", [smalltalk.send(robozzle, "_isLevelCompleted", [])]);
return self;},
args: [],
source: unescape('testIfStarLiesSomewhereElseAndShipDoesNotMoveThenLevelNotCompleted%0D%09%7C%20robozzle%20%7C%0D%09robozzle%20%3A%3D%20Robozzle%20stars%3A%20%7B0@1%7D%20ship%3A%20%28RShip%20at%3A%200@0%29%20numberOfMoves%3A%200.%20%0D%09self%20deny%3A%20robozzle%20isLevelCompleted.'),
messageSends: ["stars:ship:numberOfMoves:", unescape("@"), "at:", "deny:", "isLevelCompleted"],
referencedClasses: ["Robozzle", "RShip"]
}),
smalltalk.RobozzleTest);

smalltalk.addMethod(
unescape('_testifShipHitsAllStarsButNotWithinAllowedNumberOfMovesThenLevelNotCompleted'),
smalltalk.method({
selector: unescape('testifShipHitsAllStarsButNotWithinAllowedNumberOfMovesThenLevelNotCompleted'),
category: 'tests',
fn: function (){
var self=this;
var robozzle=nil;
var ship=nil;
(ship=smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(0)])]));
(robozzle=smalltalk.send((smalltalk.Robozzle || Robozzle), "_stars_ship_numberOfMoves_", [[smalltalk.send((0), "__at", [(1)])], ship, (0)]));
smalltalk.send(ship, "_forward", []);
smalltalk.send(self, "_deny_", [smalltalk.send(robozzle, "_isLevelCompleted", [])]);
return self;},
args: [],
source: unescape('testifShipHitsAllStarsButNotWithinAllowedNumberOfMovesThenLevelNotCompleted%0D%09%7C%20robozzle%20ship%20%7C%0D%09ship%20%3A%3D%20RShip%20at%3A0@0.%0D%09robozzle%20%3A%3D%20Robozzle%20stars%3A%20%7B0@1%7D%20ship%3A%20ship%20numberOfMoves%3A%200.%0D%09ship%20forward.%0D%09self%20deny%3A%20robozzle%20isLevelCompleted.'),
messageSends: ["at:", unescape("@"), "stars:ship:numberOfMoves:", "forward", "deny:", "isLevelCompleted"],
referencedClasses: ["RShip", "Robozzle"]
}),
smalltalk.RobozzleTest);



smalltalk.addClass('Robozzle', smalltalk.Object, ['stars', 'ship', 'numberOfMoves'], 'Robozzle');
smalltalk.addMethod(
unescape('_numberOfMoves_'),
smalltalk.method({
selector: unescape('numberOfMoves%3A'),
category: 'accessing',
fn: function (aSmallInteger){
var self=this;
(self['@numberOfMoves']=aSmallInteger);
return self;},
args: ["aSmallInteger"],
source: unescape('numberOfMoves%3A%20aSmallInteger%20%0D%09numberOfMoves%20%3A%3D%20aSmallInteger.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Robozzle);

smalltalk.addMethod(
unescape('_ship_'),
smalltalk.method({
selector: unescape('ship%3A'),
category: 'accessing',
fn: function (aRShip){
var self=this;
(self['@ship']=aRShip);
return self;},
args: ["aRShip"],
source: unescape('ship%3A%20aRShip%20%0D%09ship%20%3A%3D%20aRShip.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Robozzle);

smalltalk.addMethod(
unescape('_shipPositions'),
smalltalk.method({
selector: unescape('shipPositions'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@ship'], "_positions", []), "_first_", [((($receiver = self['@numberOfMoves']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
return self;},
args: [],
source: unescape('shipPositions%0D%09%5E%20ship%20positions%20first%3A%20numberOfMoves%20+%201'),
messageSends: ["first:", "positions", unescape("+")],
referencedClasses: []
}),
smalltalk.Robozzle);

smalltalk.addMethod(
unescape('_stars_'),
smalltalk.method({
selector: unescape('stars%3A'),
category: 'accessing',
fn: function (anArray){
var self=this;
(self['@stars']=anArray);
return self;},
args: ["anArray"],
source: unescape('stars%3A%20anArray%20%0D%09stars%3A%3DanArray.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Robozzle);

smalltalk.addMethod(
unescape('_isLevelCompleted'),
smalltalk.method({
selector: unescape('isLevelCompleted'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@stars'], "_copyWithoutAll_", [smalltalk.send(self, "_shipPositions", [])]), "_isEmpty", []);
return self;},
args: [],
source: unescape('isLevelCompleted%0D%09%5E%20%28stars%20copyWithoutAll%3A%20self%20shipPositions%29%20isEmpty'),
messageSends: ["isEmpty", "copyWithoutAll:", "shipPositions"],
referencedClasses: []
}),
smalltalk.Robozzle);


smalltalk.addMethod(
unescape('_stars_ship_numberOfMoves_'),
smalltalk.method({
selector: unescape('stars%3Aship%3AnumberOfMoves%3A'),
category: 'instance creation',
fn: function (anArray, aRShip, aSmallInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_stars_", [anArray]);smalltalk.send($rec, "_ship_", [aRShip]);return smalltalk.send($rec, "_numberOfMoves_", [aSmallInteger]);})(smalltalk.send(self, "_new", []));
return self;},
args: ["anArray", "aRShip", "aSmallInteger"],
source: unescape('stars%3A%20anArray%20ship%3A%20aRShip%20numberOfMoves%3A%20aSmallInteger%20%0D%09%5E%20%28self%20new%29%20%0D%09%09stars%3A%20anArray%3B%0D%09%09ship%3A%20aRShip%3B%0D%09%09numberOfMoves%3AaSmallInteger.'),
messageSends: ["stars:", "ship:", "numberOfMoves:", "new"],
referencedClasses: []
}),
smalltalk.Robozzle.klass);

smalltalk.addMethod(
unescape('_isLevelCompleted'),
smalltalk.method({
selector: unescape('isLevelCompleted'),
category: 'as yet unclassified',
fn: function (){
var self=this;
smalltalk.send(self, "_shouldBeImplemented", []);
return self;},
args: [],
source: unescape('isLevelCompleted%0D%09self%20shouldBeImplemented.'),
messageSends: ["shouldBeImplemented"],
referencedClasses: []
}),
smalltalk.Robozzle.klass);


smalltalk.addClass('RShipTest', smalltalk.TestCase, [], 'Robozzle');
smalltalk.addMethod(
unescape('_testMovingShipForward'),
smalltalk.method({
selector: unescape('testMovingShipForward'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((0), "__at", [(13)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(12)])]), "_north", []), "_forward", []), "_position", [])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((0), "__at", [(11)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(12)])]), "_south", []), "_forward", []), "_position", [])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((1), "__at", [(12)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(12)])]), "_east", []), "_forward", []), "_position", [])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send((1), "_negated", []), "__at", [(12)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(12)])]), "_west", []), "_forward", []), "_position", [])]);
return self;},
args: [],
source: unescape('testMovingShipForward%0D%09self%20assert%3A%200@13%20equals%3A%20%28RShip%20at%3A%200@12%29%20north%20forward%20position.%0D%09self%20assert%3A%200@11%20equals%3A%20%28RShip%20at%3A%200@12%29%20south%20forward%20position.%0D%09self%20assert%3A%201@12%20equals%3A%20%28RShip%20at%3A%200@12%29%20east%20forward%20position.%0D%09self%20assert%3A%201%20negated@12%20equals%3A%20%28RShip%20at%3A%200@12%29%20west%20forward%20position.'),
messageSends: ["assert:equals:", unescape("@"), "position", "forward", "north", "at:", "south", "east", "negated", "west"],
referencedClasses: ["RShip"]
}),
smalltalk.RShipTest);

smalltalk.addMethod(
unescape('_testTurningShipToLeft'),
smalltalk.method({
selector: unescape('testTurningShipToLeft'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((17), "__at", [(12)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((18), "__at", [(12)])]), "_north", []), "_left", []), "_forward", []), "_position", [])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((18), "__at", [(11)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((18), "__at", [(12)])]), "_north", []), "_left", []), "_left", []), "_forward", []), "_position", [])]);
return self;},
args: [],
source: unescape('testTurningShipToLeft%0D%09self%20assert%3A%2017@12%20equals%3A%20%28RShip%20at%3A%2018@12%29%20north%20left%20forward%20position.%0D%09%0D%09self%20assert%3A%2018@11%20equals%3A%20%28RShip%20at%3A%2018@12%29%20north%20left%20left%20forward%20position.'),
messageSends: ["assert:equals:", unescape("@"), "position", "forward", "left", "north", "at:"],
referencedClasses: ["RShip"]
}),
smalltalk.RShipTest);

smalltalk.addMethod(
unescape('_testTurningShipToRight'),
smalltalk.method({
selector: unescape('testTurningShipToRight'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((19), "__at", [(12)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((18), "__at", [(12)])]), "_north", []), "_right", []), "_forward", []), "_position", [])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((18), "__at", [(11)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((18), "__at", [(12)])]), "_north", []), "_right", []), "_right", []), "_forward", []), "_position", [])]);
return self;},
args: [],
source: unescape('testTurningShipToRight%0D%09self%20assert%3A%2019@12%20equals%3A%20%28RShip%20at%3A%2018@12%29%20north%20right%20forward%20position.%0D%09%0D%09self%20assert%3A%2018@11%20equals%3A%20%28RShip%20at%3A%2018@12%29%20north%20right%20right%20forward%20position.'),
messageSends: ["assert:equals:", unescape("@"), "position", "forward", "right", "north", "at:"],
referencedClasses: ["RShip"]
}),
smalltalk.RShipTest);



smalltalk.addClass('RShip', smalltalk.Object, ['positions', 'translation'], 'Robozzle');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (aPoint){
var self=this;
(self['@positions']=(function($rec){smalltalk.send($rec, "_add_", [aPoint]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_positions", [])));
return self;},
args: ["aPoint"],
source: unescape('at%3A%20aPoint%0D%09positions%20%3A%3D%20self%20positions%20add%3A%20aPoint%3B%20yourself.'),
messageSends: ["add:", "yourself", "positions"],
referencedClasses: []
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_position'),
smalltalk.method({
selector: unescape('position'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_positions", []), "_last", []);
return self;},
args: [],
source: unescape('position%0D%09%5E%20self%20positions%20last'),
messageSends: ["last", "positions"],
referencedClasses: []
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_positions'),
smalltalk.method({
selector: unescape('positions'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@positions']) == nil || $receiver == undefined) ? (function(){return (self['@positions']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));})() : $receiver;
return self;},
args: [],
source: unescape('positions%0D%09%5E%20positions%20ifNil%3A%20%5Bpositions%20%3A%3D%20OrderedCollection%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_translation'),
smalltalk.method({
selector: unescape('translation'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@translation']) == nil || $receiver == undefined) ? (function(){smalltalk.send(self, "_north", []);return self['@translation'];})() : $receiver;
return self;},
args: [],
source: unescape('translation%0D%09%5E%20%20translation%20ifNil%3A%20%5Bself%20north.%20translation%5D.'),
messageSends: ["ifNil:", "north"],
referencedClasses: []
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_forward'),
smalltalk.method({
selector: unescape('forward'),
category: 'commands',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_positions", []), "_add_", [smalltalk.send(smalltalk.send(self, "_position", []), "_translateBy_", [smalltalk.send(self, "_translation", [])])]);
return self;},
args: [],
source: unescape('forward%0D%09self%20positions%20add%3A%20%28self%20position%20translateBy%3A%20self%20translation%29.'),
messageSends: ["add:", "positions", "translateBy:", "position", "translation"],
referencedClasses: []
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_left'),
smalltalk.method({
selector: unescape('left'),
category: 'commands',
fn: function (){
var self=this;
(self['@translation']=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_translation", []), "_y", []), "_negated", []), "__at", [smalltalk.send(smalltalk.send(self, "_translation", []), "_x", [])]));
smalltalk.send(smalltalk.send(self, "_positions", []), "_add_", [smalltalk.send(self, "_position", [])]);
return self;},
args: [],
source: unescape('left%0D%09translation%20%3A%3D%20self%20translation%20y%20negated%20@%20self%20translation%20x.%0D%09self%20positions%20add%3A%20self%20position.'),
messageSends: [unescape("@"), "negated", "y", "translation", "x", "add:", "positions", "position"],
referencedClasses: []
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_right'),
smalltalk.method({
selector: unescape('right'),
category: 'commands',
fn: function (){
var self=this;
(self['@translation']=smalltalk.send(smalltalk.send(smalltalk.send(self, "_translation", []), "_y", []), "__at", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_translation", []), "_x", []), "_negated", [])]));
smalltalk.send(smalltalk.send(self, "_positions", []), "_add_", [smalltalk.send(self, "_position", [])]);
return self;},
args: [],
source: unescape('right%0D%09translation%20%3A%3D%20self%20translation%20y%20@%20self%20translation%20x%20negated.%0D%09self%20positions%20add%3A%20self%20position.'),
messageSends: [unescape("@"), "y", "translation", "negated", "x", "add:", "positions", "position"],
referencedClasses: []
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_east'),
smalltalk.method({
selector: unescape('east'),
category: 'directions',
fn: function (){
var self=this;
(self['@translation']=smalltalk.send((1), "__at", [(0)]));
return self;},
args: [],
source: unescape('east%0D%09translation%20%3A%3D%201@0'),
messageSends: [unescape("@")],
referencedClasses: []
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_north'),
smalltalk.method({
selector: unescape('north'),
category: 'directions',
fn: function (){
var self=this;
(self['@translation']=smalltalk.send((0), "__at", [(1)]));
return self;},
args: [],
source: unescape('north%0D%09translation%20%3A%3D%200@1'),
messageSends: [unescape("@")],
referencedClasses: []
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_south'),
smalltalk.method({
selector: unescape('south'),
category: 'directions',
fn: function (){
var self=this;
(self['@translation']=smalltalk.send((0), "__at", [smalltalk.send((1), "_negated", [])]));
return self;},
args: [],
source: unescape('south%0D%09translation%20%3A%3D%200@%201%20negated'),
messageSends: [unescape("@"), "negated"],
referencedClasses: []
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_west'),
smalltalk.method({
selector: unescape('west'),
category: 'directions',
fn: function (){
var self=this;
(self['@translation']=smalltalk.send(smalltalk.send((1), "_negated", []), "__at", [(0)]));
return self;},
args: [],
source: unescape('west%0D%09translation%20%3A%3D%201%20negated%20@0'),
messageSends: [unescape("@"), "negated"],
referencedClasses: []
}),
smalltalk.RShip);


smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'as yet unclassified',
fn: function (aPoint){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_at_", [aPoint]);
return self;},
args: ["aPoint"],
source: unescape('at%3A%20aPoint%0D%09%5E%20self%20new%20at%3A%20aPoint'),
messageSends: ["at:", "new"],
referencedClasses: []
}),
smalltalk.RShip.klass);


