smalltalk.addPackage('Robozzle', {});
smalltalk.addClass('RobozzleTest', smalltalk.TestCase, [], 'Robozzle');
smalltalk.addMethod(
unescape('_testAcceptanceTest'),
smalltalk.method({
selector: unescape('testAcceptanceTest'),
fn: function (){
var self=this;
var robozzle=nil;
var ship=nil;
(ship=smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(0)])]));
(robozzle=smalltalk.send((smalltalk.Robozzle || Robozzle), "_stars_ship_numberOfMoves_", [[smalltalk.send(smalltalk.send((2), "_negated", []), "__at", [(0)]),smalltalk.send((2), "__at", [(0)])], ship, (9)]));
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ship, "_right", []), "_forward", []), "_forward", []), "_left", []), "_left", []), "_forward", []), "_forward", []), "_forward", []), "_forward", []);
smalltalk.send(self, "_assert_", [smalltalk.send(robozzle, "_isLevelCompleted", [])]);
return self;}
}),
smalltalk.RobozzleTest);

smalltalk.addMethod(
unescape('_testIfShipLiesOnOnlyStarInLevelThenLevelCompletedEvenIfShipDoesNotMove'),
smalltalk.method({
selector: unescape('testIfShipLiesOnOnlyStarInLevelThenLevelCompletedEvenIfShipDoesNotMove'),
fn: function (){
var self=this;
var robozzle=nil;
(robozzle=smalltalk.send((smalltalk.Robozzle || Robozzle), "_stars_ship_numberOfMoves_", [[smalltalk.send((0), "__at", [(0)])], smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(0)])]), (0)]));
smalltalk.send(self, "_assert_", [smalltalk.send(robozzle, "_isLevelCompleted", [])]);
return self;}
}),
smalltalk.RobozzleTest);

smalltalk.addMethod(
unescape('_testIfShipMovesOntoOnlyStarInLevelThenLevelCompleted'),
smalltalk.method({
selector: unescape('testIfShipMovesOntoOnlyStarInLevelThenLevelCompleted'),
fn: function (){
var self=this;
var robozzle=nil;
var ship=nil;
(ship=smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(0)])]));
(robozzle=smalltalk.send((smalltalk.Robozzle || Robozzle), "_stars_ship_numberOfMoves_", [[smalltalk.send((0), "__at", [(1)])], ship, (1)]));
smalltalk.send(ship, "_forward", []);
smalltalk.send(self, "_assert_", [smalltalk.send(robozzle, "_isLevelCompleted", [])]);
return self;}
}),
smalltalk.RobozzleTest);

smalltalk.addMethod(
unescape('_testIfStarLiesSomewhereElseAndShipDoesNotMoveThenLevelNotCompleted'),
smalltalk.method({
selector: unescape('testIfStarLiesSomewhereElseAndShipDoesNotMoveThenLevelNotCompleted'),
fn: function (){
var self=this;
var robozzle=nil;
(robozzle=smalltalk.send((smalltalk.Robozzle || Robozzle), "_stars_ship_numberOfMoves_", [[smalltalk.send((0), "__at", [(1)])], smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(0)])]), (0)]));
smalltalk.send(self, "_deny_", [smalltalk.send(robozzle, "_isLevelCompleted", [])]);
return self;}
}),
smalltalk.RobozzleTest);

smalltalk.addMethod(
unescape('_testifShipHitsAllStarsButNotWithinAllowedNumberOfMovesThenLevelNotCompleted'),
smalltalk.method({
selector: unescape('testifShipHitsAllStarsButNotWithinAllowedNumberOfMovesThenLevelNotCompleted'),
fn: function (){
var self=this;
var robozzle=nil;
var ship=nil;
(ship=smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(0)])]));
(robozzle=smalltalk.send((smalltalk.Robozzle || Robozzle), "_stars_ship_numberOfMoves_", [[smalltalk.send((0), "__at", [(1)])], ship, (0)]));
smalltalk.send(ship, "_forward", []);
smalltalk.send(self, "_deny_", [smalltalk.send(robozzle, "_isLevelCompleted", [])]);
return self;}
}),
smalltalk.RobozzleTest);



smalltalk.addClass('Robozzle', smalltalk.Object, ['stars', 'ship', 'numberOfMoves'], 'Robozzle');
smalltalk.addMethod(
unescape('_numberOfMoves_'),
smalltalk.method({
selector: unescape('numberOfMoves%3A'),
fn: function (aSmallInteger){
var self=this;
(self['@numberOfMoves']=aSmallInteger);
return self;}
}),
smalltalk.Robozzle);

smalltalk.addMethod(
unescape('_ship_'),
smalltalk.method({
selector: unescape('ship%3A'),
fn: function (aRShip){
var self=this;
(self['@ship']=aRShip);
return self;}
}),
smalltalk.Robozzle);

smalltalk.addMethod(
unescape('_shipPositions'),
smalltalk.method({
selector: unescape('shipPositions'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@ship'], "_positions", []), "_first_", [((($receiver = self['@numberOfMoves']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
return self;}
}),
smalltalk.Robozzle);

smalltalk.addMethod(
unescape('_stars_'),
smalltalk.method({
selector: unescape('stars%3A'),
fn: function (anArray){
var self=this;
(self['@stars']=anArray);
return self;}
}),
smalltalk.Robozzle);

smalltalk.addMethod(
unescape('_isLevelCompleted'),
smalltalk.method({
selector: unescape('isLevelCompleted'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@stars'], "_copyWithoutAll_", [smalltalk.send(self, "_shipPositions", [])]), "_isEmpty", []);
return self;}
}),
smalltalk.Robozzle);


smalltalk.addMethod(
unescape('_stars_ship_numberOfMoves_'),
smalltalk.method({
selector: unescape('stars%3Aship%3AnumberOfMoves%3A'),
fn: function (anArray, aRShip, aSmallInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_stars_", [anArray]);smalltalk.send($rec, "_ship_", [aRShip]);return smalltalk.send($rec, "_numberOfMoves_", [aSmallInteger]);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Robozzle.klass);

smalltalk.addMethod(
unescape('_isLevelCompleted'),
smalltalk.method({
selector: unescape('isLevelCompleted'),
fn: function (){
var self=this;
smalltalk.send(self, "_shouldBeImplemented", []);
return self;}
}),
smalltalk.Robozzle.klass);


smalltalk.addClass('RShipTest', smalltalk.TestCase, [], 'Robozzle');
smalltalk.addMethod(
unescape('_testMovingShipForward'),
smalltalk.method({
selector: unescape('testMovingShipForward'),
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((0), "__at", [(13)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(12)])]), "_north", []), "_forward", []), "_position", [])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((0), "__at", [(11)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(12)])]), "_south", []), "_forward", []), "_position", [])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((1), "__at", [(12)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(12)])]), "_east", []), "_forward", []), "_position", [])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send((1), "_negated", []), "__at", [(12)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((0), "__at", [(12)])]), "_west", []), "_forward", []), "_position", [])]);
return self;}
}),
smalltalk.RShipTest);

smalltalk.addMethod(
unescape('_testTurningShipToLeft'),
smalltalk.method({
selector: unescape('testTurningShipToLeft'),
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((17), "__at", [(12)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((18), "__at", [(12)])]), "_north", []), "_left", []), "_forward", []), "_position", [])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((18), "__at", [(11)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((18), "__at", [(12)])]), "_north", []), "_left", []), "_left", []), "_forward", []), "_position", [])]);
return self;}
}),
smalltalk.RShipTest);

smalltalk.addMethod(
unescape('_testTurningShipToRight'),
smalltalk.method({
selector: unescape('testTurningShipToRight'),
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((19), "__at", [(12)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((18), "__at", [(12)])]), "_north", []), "_right", []), "_forward", []), "_position", [])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((18), "__at", [(11)]), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.RShip || RShip), "_at_", [smalltalk.send((18), "__at", [(12)])]), "_north", []), "_right", []), "_right", []), "_forward", []), "_position", [])]);
return self;}
}),
smalltalk.RShipTest);



smalltalk.addClass('RShip', smalltalk.Object, ['positions', 'translation'], 'Robozzle');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (aPoint){
var self=this;
(self['@positions']=(function($rec){smalltalk.send($rec, "_add_", [aPoint]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_positions", [])));
return self;}
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_position'),
smalltalk.method({
selector: unescape('position'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_positions", []), "_last", []);
return self;}
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_positions'),
smalltalk.method({
selector: unescape('positions'),
fn: function (){
var self=this;
return (($receiver = self['@positions']) == nil || $receiver == undefined) ? (function(){return (self['@positions']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_translation'),
smalltalk.method({
selector: unescape('translation'),
fn: function (){
var self=this;
return (($receiver = self['@translation']) == nil || $receiver == undefined) ? (function(){smalltalk.send(self, "_north", []);return self['@translation'];})() : $receiver;
return self;}
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_forward'),
smalltalk.method({
selector: unescape('forward'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_positions", []), "_add_", [smalltalk.send(smalltalk.send(self, "_position", []), "_translateBy_", [smalltalk.send(self, "_translation", [])])]);
return self;}
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_left'),
smalltalk.method({
selector: unescape('left'),
fn: function (){
var self=this;
(self['@translation']=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_translation", []), "_y", []), "_negated", []), "__at", [smalltalk.send(smalltalk.send(self, "_translation", []), "_x", [])]));
smalltalk.send(smalltalk.send(self, "_positions", []), "_add_", [smalltalk.send(self, "_position", [])]);
return self;}
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_right'),
smalltalk.method({
selector: unescape('right'),
fn: function (){
var self=this;
(self['@translation']=smalltalk.send(smalltalk.send(smalltalk.send(self, "_translation", []), "_y", []), "__at", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_translation", []), "_x", []), "_negated", [])]));
smalltalk.send(smalltalk.send(self, "_positions", []), "_add_", [smalltalk.send(self, "_position", [])]);
return self;}
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_east'),
smalltalk.method({
selector: unescape('east'),
fn: function (){
var self=this;
(self['@translation']=smalltalk.send((1), "__at", [(0)]));
return self;}
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_north'),
smalltalk.method({
selector: unescape('north'),
fn: function (){
var self=this;
(self['@translation']=smalltalk.send((0), "__at", [(1)]));
return self;}
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_south'),
smalltalk.method({
selector: unescape('south'),
fn: function (){
var self=this;
(self['@translation']=smalltalk.send((0), "__at", [smalltalk.send((1), "_negated", [])]));
return self;}
}),
smalltalk.RShip);

smalltalk.addMethod(
unescape('_west'),
smalltalk.method({
selector: unescape('west'),
fn: function (){
var self=this;
(self['@translation']=smalltalk.send(smalltalk.send((1), "_negated", []), "__at", [(0)]));
return self;}
}),
smalltalk.RShip);


smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (aPoint){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_at_", [aPoint]);
return self;}
}),
smalltalk.RShip.klass);


