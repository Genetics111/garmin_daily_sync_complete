"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RunningTemplate_1 = __importDefault(require("./templates/RunningTemplate"));
class Running {
    constructor() {
        this.data = (0, RunningTemplate_1.default)();
    }
    get name() {
        return this.data.workoutName;
    }
    set name(name) {
        this.data.workoutName = `${name}`;
    }
    get distance() {
        return (this.data.workoutSegments[0].workoutSteps[0].endConditionValue || 0);
    }
    set distance(meters) {
        this.data.workoutSegments[0].workoutSteps[0].endConditionValue =
            Math.round(meters);
    }
    get workoutId() {
        return this.data.workoutId;
    }
    set workoutId(workoutId) {
        this.data.workoutId = workoutId;
    }
    get description() {
        return this.data.description;
    }
    set description(description) {
        this.data.description = description;
    }
    isValid() {
        return !!(this.name && this.distance);
    }
    toJson() {
        return this.data;
    }
    toString() {
        return `${this.name}, ${(this.distance / 1000).toFixed(2)}km`;
    }
}
exports.default = Running;
//# sourceMappingURL=Running.js.map