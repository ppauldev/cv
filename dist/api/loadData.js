import * as cvdataJSON from "../cvdata.json";
// Interface for data loading, here via JSON
export var loadData = function () {
    if (!cvdataJSON)
        return {};
    return cvdataJSON;
};
