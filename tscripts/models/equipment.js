"use strict";
/// <reference path="../knockout.d.ts"/>
/// <reference path="../models/slots.ts"/>
/// <reference path="restrictions.ts"/>
var Kanai;
(function (Kanai) {
    class Equipment {
        constructor(itemName, affix) {
            this.itemName = ko.observable(itemName);
            this.affix = ko.observable(affix);
            this.isCubedSeason = ko.observable(false);
            this.isCubedNonSeason = ko.observable(false);
            this.isStashed = ko.observable(false);
        }
    }
    Kanai.Equipment = Equipment;
})(Kanai || (Kanai = {}));
