"use strict";

const scoreCards = [
  {
    id: 1,
    student: "Joe M",
    scores: [54, 76, 65],
  },
  {
    id: 2,
    student: "Jane K",
    scores: [68, 85, 74],
  },
  {
    id: 3,
    student: "Chris P",
    scores: [55, 88, 80],
  },
];

const calculatePercentile = function (english, compSc, mathematics) {
  return (((english + compSc + mathematics) / 300) * 100).toPrecision(4);
};

scoreCards.forEach((element) => {
  //console.log(calculatePercentile(element.scores, element[1], element[2]));
  console.log(
    calculatePercentile(element.scores[0], element.scores[1], element.scores[2])
  );
  //   element.scores.forEach((score) => {
  //     console.log(score);
  //     calculatePercentile(score[0], score[1], score[2]);
  //   });
});
