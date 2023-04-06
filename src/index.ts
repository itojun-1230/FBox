import { initArray, randomArray } from "./array";
import { degreeToRadian, floor, quadEquations, radianToDegree, rangeRandom, round } from "./math";
import { repeat, repeatStep } from "./repeat";
import { timeMeasure } from "./system";

export const FboxArray = {
    initArray,
    randomArray
}
export const FboxRepeat = {
    repeat,
    repeatStep
}
export const FboxMath = {
    degreeToRadian,
    radianToDegree,
    floor,
    round,
    rangeRandom,
    quadEquations
}

export const FboxSystem = {
    timeMeasure
}