window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script17 = function()
{
          var player = GetPlayer();

        // 1. Get the values from your Storyline variables.
        //    Make sure the variable names here ("Q1", "Q2") match your Storyline project exactly.
        var q1_answer = player.GetVar("Q1");
        var q2_answer = player.GetVar("Q2");

        // 2. Combine the answers into a single string, separated by a comma.
        var result = q1_answer + "," + q2_answer;

        // 3. Send the result back to the parent window.
        //    Do not change the line below.
        window.parent.postMessage(result, "*");

}

};
