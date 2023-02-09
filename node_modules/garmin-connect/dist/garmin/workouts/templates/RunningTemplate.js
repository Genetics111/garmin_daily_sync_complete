"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SportTypeKey;
(function (SportTypeKey) {
    SportTypeKey["running"] = "running";
})(SportTypeKey || (SportTypeKey = {}));
var WorkoutStepType;
(function (WorkoutStepType) {
    WorkoutStepType["executableStepDTO"] = "ExecutableStepDTO";
})(WorkoutStepType || (WorkoutStepType = {}));
var StepTypeKey;
(function (StepTypeKey) {
    StepTypeKey["interval"] = "interval";
})(StepTypeKey || (StepTypeKey = {}));
var ConditionTypeKey;
(function (ConditionTypeKey) {
    ConditionTypeKey["distance"] = "distance";
})(ConditionTypeKey || (ConditionTypeKey = {}));
var UnitKey;
(function (UnitKey) {
    UnitKey["kilometer"] = "kilometer";
})(UnitKey || (UnitKey = {}));
var WorkoutTargetTypeKey;
(function (WorkoutTargetTypeKey) {
    WorkoutTargetTypeKey["noTarget"] = "no.target";
})(WorkoutTargetTypeKey || (WorkoutTargetTypeKey = {}));
function default_1() {
    return {
        description: undefined,
        workoutId: undefined,
        sportType: {
            sportTypeId: 1,
            sportTypeKey: SportTypeKey.running
        },
        workoutName: '',
        workoutSegments: [
            {
                segmentOrder: 1,
                sportType: {
                    sportTypeId: 1,
                    sportTypeKey: SportTypeKey.running
                },
                workoutSteps: [
                    {
                        type: WorkoutStepType.executableStepDTO,
                        stepId: null,
                        stepOrder: 1,
                        childStepId: null,
                        description: null,
                        stepType: {
                            stepTypeId: 3,
                            stepTypeKey: StepTypeKey.interval
                        },
                        endCondition: {
                            conditionTypeKey: ConditionTypeKey.distance,
                            conditionTypeId: 3
                        },
                        preferredEndConditionUnit: {
                            unitKey: UnitKey.kilometer
                        },
                        endConditionValue: null,
                        endConditionCompare: null,
                        endConditionZone: null,
                        targetType: {
                            workoutTargetTypeId: 1,
                            workoutTargetTypeKey: WorkoutTargetTypeKey.noTarget
                        },
                        targetValueOne: null,
                        targetValueTwo: null,
                        zoneNumber: null
                    }
                ]
            }
        ]
    };
}
exports.default = default_1;
//# sourceMappingURL=RunningTemplate.js.map