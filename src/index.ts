import { initArray, randomArray } from "./array";
import { degreeToRadian, floor, radianToDegree } from "./math";
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
    floor
}

export const FboxSystem = {
    timeMeasure
}