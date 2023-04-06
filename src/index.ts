import { initArray, randomArray } from "./array";
import { degreeToRadian, floor, radianToDegree, round } from "./math";
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
    round
}

export const FboxSystem = {
    timeMeasure
}