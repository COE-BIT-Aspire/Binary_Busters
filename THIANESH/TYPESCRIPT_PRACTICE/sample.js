"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample = void 0;
var sample = /** @class */ (function () {
    function sample(x, y, z) {
        var _this = this;
        //sum : number = this.x + this.y + this.z;
        this.adder = function () {
            console.log("Added value is : ", _this.x + _this.y + _this.z);
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return sample;
}());
exports.sample = sample;
