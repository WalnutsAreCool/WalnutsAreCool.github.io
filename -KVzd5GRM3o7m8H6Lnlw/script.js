function logArgs(args) {
  var a = 1
  console.log(args)
}

var consoleLogString = logArgs.toString()
var consoleLogBox = $("<pre>")
consoleLogBox.text(consoleLogString)
$("#firstbox").append(consoleLogBox)

function onePlus(val) {
  return val + 1
}

var onePlusString = onePlus.toString()
var onePlusBox = $("<pre>")
onePlusBox.text(onePlusString)
$("#secondbox").append(onePlusBox)

function rand() {
 return Math.floor(Math.random()*10) 
}

function timesTwo(rand) {
  return rand()*2
}

var timesTwoString = rand.toString() + "\n" + timesTwo.toString()
var timesTwoBox = $("<pre>")
timesTwoBox.text(timesTwoString)
$("#thirdbox").append(timesTwoBox)

var id = $("#exampleID")
var class = $(".exampleClass")

var jQueryString = id.toString() + 
var jQueryBox = $("<pre>")
jQuery.text(jQueryString)
$("#fourthbox").append(jQueryBox)

