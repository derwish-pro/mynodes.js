/**
 * Created by Derwish (derwish.pro@gmail.com) on 08.03.17.
 * License: http://www.gnu.org/licenses/gpl-3.0.txt
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "../node", "../container"], factory);
    }
})(function (require, exports) {
    "use strict";
    const node_1 = require("../node");
    const container_1 = require("../container");
    class FiltersOnlyFromRangeNode extends node_1.Node {
        constructor() {
            super();
            this.title = "Only from range";
            this.descriprion = "This node filters the input values. " +
                "It transmits the value only if it is in the range from Min to Max.";
            this.addInput("value", "number");
            this.addInput("min", "number");
            this.addInput("max", "number");
            this.addOutput("value", "number");
        }
        onInputUpdated() {
            let val = this.getInputData(0);
            let min = this.getInputData(1);
            let max = this.getInputData(2);
            if (val == null || min == null || max == null) {
                this.setOutputData(0, null);
                return;
            }
            if (val >= min && val <= max)
                this.setOutputData(0, val);
        }
    }
    container_1.Container.registerNodeType("filters/only-from-range", FiltersOnlyFromRangeNode);
    class FiltersOnlyGreaterNode extends node_1.Node {
        constructor() {
            super();
            this.title = "Only greater";
            this.descriprion = "This node filters the input values. " +
                "It passes only those values that are greater than Treshold.";
            this.addInput("value", "number");
            this.addInput("treshold", "number");
            this.addOutput("value", "number");
        }
        onInputUpdated() {
            let val = this.getInputData(0);
            let treshold = this.getInputData(1);
            if (val == null || treshold == null) {
                this.setOutputData(0, null);
                return;
            }
            if (val > treshold)
                this.setOutputData(0, val);
        }
    }
    container_1.Container.registerNodeType("filters/only-greater", FiltersOnlyGreaterNode);
    class FiltersOnlyLowerNode extends node_1.Node {
        constructor() {
            super();
            this.title = "Only lower";
            this.descriprion = "This node filters the input values. " +
                "It passes only those values that are lower than or equal to Treshold.";
            this.addInput("value", "number");
            this.addInput("treshold", "number");
            this.addOutput("value", "number");
        }
        onInputUpdated() {
            let val = this.getInputData(0);
            let treshold = this.getInputData(1);
            if (val == null || treshold == null) {
                this.setOutputData(0, null);
                return;
            }
            if (val < treshold)
                this.setOutputData(0, val);
        }
    }
    container_1.Container.registerNodeType("filters/only-lower", FiltersOnlyLowerNode);
    class FiltersOnlyEqualNode extends node_1.Node {
        constructor() {
            super();
            this.title = "Only equal";
            this.descriprion = "This node filters the input values. " +
                "It transmits the value from input named \"Value\" " +
                "only if it is equal to \"Sample\".";
            this.addInput("value");
            this.addInput("sample");
            this.addOutput("value");
        }
        onInputUpdated() {
            let val = this.getInputData(0);
            let sample = this.getInputData(1);
            if (val == null || sample == null) {
                this.setOutputData(0, null);
                return;
            }
            if (val == sample)
                this.setOutputData(0, val);
        }
    }
    container_1.Container.registerNodeType("filters/only-equal", FiltersOnlyEqualNode);
    class FiltersOnlyTrueNode extends node_1.Node {
        constructor() {
            super();
            this.title = "Only true";
            this.descriprion = "This node filters the input values. " +
                "It transmits the value only if it is a \"true\".";
            this.addInput("value", "boolean");
            this.addOutput("true", "boolean");
        }
        onInputUpdated() {
            let val = this.getInputData(0);
            if (val == null) {
                this.setOutputData(0, null);
                return;
            }
            if (val == true)
                this.setOutputData(0, val);
        }
    }
    container_1.Container.registerNodeType("filters/only-true", FiltersOnlyTrueNode);
    class FiltersOnlyFalseNode extends node_1.Node {
        constructor() {
            super();
            this.title = "Only false";
            this.descriprion = "This node filters the input values. " +
                "It transmits the value only if it is a \"false\".";
            this.addInput("value", "boolean");
            this.addOutput("false", "boolean");
        }
        onInputUpdated() {
            let val = this.getInputData(0);
            if (val == null) {
                this.setOutputData(0, null);
                return;
            }
            if (val == false)
                this.setOutputData(0, val);
        }
    }
    container_1.Container.registerNodeType("filters/only-false", FiltersOnlyFalseNode);
});
//# sourceMappingURL=filters.js.map