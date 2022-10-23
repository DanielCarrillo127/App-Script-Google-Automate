//function getActiveFormID(){
//  const id = FormApp.getActiveForm().getId();
//  console.log(id);
//}

function foo() {
  //id from inside url link
  const form = FormApp.openById("19zbHS9BVpITPcMOYuTDkVqpqMvkwJ5FrjgM7yFsCVSk");
  //282 resp
  const randomSubs = [], nSubs = 282;
  while (randomSubs.length < nSubs)
    randomSubs.push(createRandomSubmission_(form).submit());

  // doAwesomeAnalysis(randomSubs); // etc.
}
var counterQuetion = 1;//
// Constructs a random response for the given form, and returns it to the caller (e.g. for submission, etc).
function createRandomSubmission_(form) {
  const resp = form.createResponse();
  const questions = form.getItems().filter(isAnswerable_);
  console.log("len possible questions:", questions.length)
  questions.forEach(function (question) {
    if (counterQuetion == 26 && count26 > 94) {
    } else {
      if (counterQuetion == 27 && count27 > 188) {

      } else {
        var answer = getRandomAnswer_(question);
        resp.withItemResponse(answer);
      }
    }

    counterQuetion += 1;

  });
  counterQuetion = 1; //
  return resp;
}

var iTypes = FormApp.ItemType;
function isAnswerable_(item, index, allItems) {
  const iType = item.getType();
  switch (iType) {
    case iTypes.MULTIPLE_CHOICE:
    case iTypes.CHECKBOX:
      /** add more type cases here as you implement the relevant answer generator */
      return true;
    default:
      return false;
  }
}

// Uses the item type to call the appropriate answer generator.
function getRandomAnswer_(q) {
  const qType = q.getType();
  switch (qType) {
    case iTypes.MULTIPLE_CHOICE:
      return getRandomMultipleChoiceAnswer_(q.asMultipleChoiceItem());
    /** add more type cases + handlers here as you implement the relevant answer generator */
    default:
      throw new TypeError("Answering questions of type '" + qType + "' is not yet implemented");
  }
}


var count1 = 1;
var count2 = 1;
var count3 = 1;
var count4 = 1;
var count5 = 1;
var count6 = 1;
var count7 = 1;
var count8 = 1;
var count9 = 1;
var count10 = 1;
var count11 = 1;
var count12 = 1;
var count13 = 1;
var count14 = 1;
var count15 = 1;
var count16 = 1;
var count17 = 1;
var count18 = 1;
var count19 = 1;
var count20 = 1;
var count21 = 1;
var count22 = 1;
var count23 = 1;
var count24 = 1;
var count25 = 1;
var count26 = 1;
var count27 = 1;
var rule1 = [139, 190, 214, 249, 282];
var rule2 = [67, 177, 232, 262, 282];
var rule3 = [30, 108, 152, 224, 282];
var rule4 = [6, 14, 28, 124, 282];
var rule5 = [44, 70, 101, 189, 282];
var rule6 = [139, 190, 214, 249, 282];
var rule7 = [114, 203, 213, 267, 282];
var rule8 = [79, 132, 164, 244, 282];
var rule9 = [17, 39, 70, 187, 282];
var rule10 = [2, 6, 28, 111, 282];
var rule11 = [100, 155, 165, 255, 282];
var rule12 = [85, 158, 195, 247, 282];
var rule13 = [107, 178, 240, 263, 282];
var rule14 = [80, 154, 202, 254, 282];
var rule15 = [53, 125, 186, 226, 282];
var rule16 = [46, 99, 150, 206, 282];
var rule17 = [27, 75, 91, 178, 282];
var rule18 = [104, 191, 239, 255, 282];
var rule19 = [71, 127, 176, 224, 282];
var rule20 = [151, 221, 250, 265, 282];
var rule21 = [91, 158, 206, 262, 282];
var rule22 = [215, 258, 271, 1, 282];
var rule23 = [260, 273, 277, 1, 282];
var rule24 = [141, 207, 238, 256, 282];
var rule25 = [94, 282];
var rule26 = [30, 56, 65, 90, 94]; // count26 > 94
var rule27 = [72, 123, 163, 170, 188]; // count27 > 188

//start with the questionItem itself
// Returns the item's ItemResponse
function getRandomMultipleChoiceAnswer_(mcItem) {
  //console.log(mcItem)
  const choices = mcItem.getChoices();
  var resp = 0;
  if (counterQuetion == 1) {
    resp = getChoiceAnswerQ1_();
  }
  if (counterQuetion == 2) {
    resp = getChoiceAnswerQ2_();
  }
  if (counterQuetion == 3) {
    resp = getChoiceAnswerQ3_();
  }
  if (counterQuetion == 4) {
    resp = getChoiceAnswerQ4_();
  }
  if (counterQuetion == 5) {
    resp = getChoiceAnswerQ5_();
  }
  if (counterQuetion == 6) {
    resp = getChoiceAnswerQ6_();
  }
  if (counterQuetion == 7) {
    resp = getChoiceAnswerQ7_();
  }
  if (counterQuetion == 8) {
    resp = getChoiceAnswerQ8_();
  }
    if (counterQuetion == 9) {
    resp = getChoiceAnswerQ9_();
  }
    if (counterQuetion == 10) {
    resp = getChoiceAnswerQ10_();
  }
  if (counterQuetion == 11) {
    resp = getChoiceAnswerQ11_();
  }
  if (counterQuetion == 12) {
    resp = getChoiceAnswerQ12_();
  }
  if (counterQuetion == 13) {
    resp = getChoiceAnswerQ13_();
  }
  if (counterQuetion == 14) {
    resp = getChoiceAnswerQ14_();
  }
  if (counterQuetion == 15) {
    resp = getChoiceAnswerQ15_();
  }
  if (counterQuetion == 16) {
    resp = getChoiceAnswerQ16_();
  }
  if (counterQuetion == 17) {
    resp = getChoiceAnswerQ17_();
  }
  if (counterQuetion == 18) {
    resp = getChoiceAnswerQ18_();
  }
    if (counterQuetion == 19) {
    resp = getChoiceAnswerQ19_();
  }
    if (counterQuetion == 20) {
    resp = getChoiceAnswerQ20_();
  }
  if (counterQuetion == 21) {
    resp = getChoiceAnswerQ21_();
  }
  if (counterQuetion == 22) {
    resp = getChoiceAnswerQ22_();
  }
  if (counterQuetion == 23) {
    resp = getChoiceAnswerQ23_();
  }
  if (counterQuetion == 24) {
    resp = getChoiceAnswerQ24_();
  }
  if (counterQuetion == 25) {
    resp = getChoiceAnswerQ25_();
  }
  if (counterQuetion == 26) {
    resp = getChoiceAnswerQ26_();
  }
  if (counterQuetion == 27) {
    resp = getChoiceAnswerQ27_();
  }
  return mcItem.createResponse(choices[resp].getValue());
}

function getChoiceAnswerQ1_() {
  for (var i = 0; i <= rule1.length; i += 1) {
    if (count1 <= rule1[i]) {
      count1++;
      return i;
    }
  }
}
function getChoiceAnswerQ2_() {
  for (var i = 0; i <= rule2.length; i += 1) {
    if (count2 <= rule2[i]) {
      count2++;
      return i;
    }
  }
}
function getChoiceAnswerQ3_() {
  for (var i = 0; i <= rule3.length; i += 1) {
    if (count3 <= rule3[i]) {
      count3++;
      return i;
    }
  }
}
function getChoiceAnswerQ4_() {
  for (var i = 0; i <= rule4.length; i += 1) {
    if (count4 <= rule4[i]) {
      count4++;
      return i;
    }
  }
}
function getChoiceAnswerQ5_() {
  for (var i = 0; i <= rule5.length; i += 1) {
    if (count5 <= rule5[i]) {
      count5++;
      return i;
    }
  }
}
function getChoiceAnswerQ6_() {
  for (var i = 0; i <= rule6.length; i += 1) {
    if (count6 <= rule6[i]) {
      count6++;
      return i;
    }
  }
}
function getChoiceAnswerQ7_() {
  for (var i = 0; i <= rule7.length; i += 1) {
    if (count7 <= rule7[i]) {
      count7++;
      return i;
    }
  }
}
function getChoiceAnswerQ8_() {
  for (var i = 0; i <= rule8.length; i += 1) {
    if (count8 <= rule8[i]) {
      count8++;
      return i;
    }
  }
}
function getChoiceAnswerQ9_() {
  for (var i = 0; i <= rule9.length; i += 1) {
    if (count9 <= rule9[i]) {
      count9++;
      return i;
    }
  }
}
function getChoiceAnswerQ10_() {
  for (var i = 0; i <= rule10.length; i += 1) {
    if (count10 <= rule10[i]) {
      count10++;
      return i;
    }
  }
}
function getChoiceAnswerQ11_() {
  for (var i = 0; i <= rule11.length; i += 1) {
    if (count11 <= rule11[i]) {
      count11++;
      return i;
    }
  }
}
function getChoiceAnswerQ12_() {
  for (var i = 0; i <= rule12.length; i += 1) {
    if (count12 <= rule12[i]) {
      count12++;
      return i;
    }
  }
}
function getChoiceAnswerQ13_() {
  for (var i = 0; i <= rule13.length; i += 1) {
    if (count13 <= rule13[i]) {
      count13++;
      return i;
    }
  }
}
function getChoiceAnswerQ14_() {
  for (var i = 0; i <= rule14.length; i += 1) {
    if (count14 <= rule14[i]) {
      count14++;
      return i;
    }
  }
}
function getChoiceAnswerQ15_() {
  for (var i = 0; i <= rule15.length; i += 1) {
    if (count15 <= rule15[i]) {
      count15++;
      return i;
    }
  }
}
function getChoiceAnswerQ16_() {
  for (var i = 0; i <= rule16.length; i += 1) {
    if (count16 <= rule16[i]) {
      count16++;
      return i;
    }
  }
}
function getChoiceAnswerQ17_() {
  for (var i = 0; i <= rule17.length; i += 1) {
    if (count17 <= rule17[i]) {
      count17++;
      return i;
    }
  }
}
function getChoiceAnswerQ18_() {
  for (var i = 0; i <= rule18.length; i += 1) {
    if (count18 <= rule18[i]) {
      count18++;
      return i;
    }
  }
}
function getChoiceAnswerQ19_() {
  for (var i = 0; i <= rule19.length; i += 1) {
    if (count19 <= rule19[i]) {
      count19++;
      return i;
    }
  }
}
function getChoiceAnswerQ20_() {
  for (var i = 0; i <= rule20.length; i += 1) {
    if (count20 <= rule20[i]) {
      count20++;
      return i;
    }
  }
}
function getChoiceAnswerQ21_() {
  for (var i = 0; i <= rule21.length; i += 1) {
    if (count21 <= rule21[i]) {
      count21++;
      return i;
    }
  }
}
function getChoiceAnswerQ22_() {
  for (var i = 0; i <= rule22.length; i += 1) {
    if (count22 <= rule22[i]) {
      count22++;
      return i;
    }
  }
}
function getChoiceAnswerQ23_() {
  for (var i = 0; i <= rule23.length; i += 1) {
    if (count23 <= rule23[i]) {
      count23++;
      return i;
    }
  }
}
function getChoiceAnswerQ24_() {
  for (var i = 0; i <= rule24.length; i += 1) {
    if (count24 <= rule24[i]) {
      count24++;
      return i;
    }
  }
}
function getChoiceAnswerQ25_() {
  for (var i = 0; i <= rule25.length; i += 1) {
    if (count25 <= rule25[i]) {
      count25++;
      return i;
    }
  }
}
function getChoiceAnswerQ26_() {
  for (var i = 0; i <= rule26.length; i += 1) {
    if (count26 <= rule26[i]) {
      count26++;
      return i;
    }
  }
}
function getChoiceAnswerQ27_() {
  for (var i = 0; i <= rule27.length; i += 1) {
    if (count27 <= rule27[i]) {
      count27++;
      return i;
    }
  }
}


function getRandomMultipleChoiceAnswerFullRandom_(mcItem) {
  const choices = mcItem.getChoices();
  console.log(choices.length)
  const i = Math.floor(Math.random() * (choices.length));
  console.log(i);
  console.log(choices[i].getValue());
  return mcItem.createResponse(choices[i].getValue());
}