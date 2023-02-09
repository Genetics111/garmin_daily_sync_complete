"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDateString = void 0;
function toDateString(date) {
    const offset = date.getTimezoneOffset();
    const offsetDate = new Date(date.getTime() - offset * 60 * 1000);
    const [dateString] = offsetDate.toISOString().split('T');
    return dateString;
}
exports.toDateString = toDateString;
//# sourceMappingURL=DateUtils.js.map