"use strict";
/// <reference path="../knockout.d.ts"/>
/// <reference path="../knockout.mapping.d.ts"/>
/// <reference path="../jquery.d.ts"/>
/// <reference path="../models/equipment.ts"/>
/// <reference path="../lang.ts" />
/// <reference path="../includes.d.ts"/>
var Kanai;
(function (Kanai) {
    let Models;
    (function (Models) {
        class DropdownListOption {
            constructor(key, value) {
                this.key = key;
                this.value = value;
            }
        }
        Models.DropdownListOption = DropdownListOption;
    })(Models = Kanai.Models || (Kanai.Models = {}));
    let VM;
    (function (VM) {
        class Site {
            constructor() {
                this.localStorageString = "kanai_cube";
                var self = this;
                this.CurrentPatchVersion = "2.4.1";
                this.Weapons = ko.observableArray();
                this.Jewelry = ko.observableArray();
                this.Armor = ko.observableArray();
                this.hideCubed = ko.observable(false).extend({ notify: 'always' });
                this.hideCubedNonSeason = ko.observable(false).extend({ notify: 'always' });
                this.nonSeasonalProgressBar = ko.observable(false).extend({ notify: 'always' });
                this.hideNonSeasonalCheckboxes = ko.observable(false).extend({ notify: 'always' });
                this.hideSeasonalCheckboxes = ko.observable(false).extend({ notify: 'always' });
                this.seasonalProgressBar = ko.observable(true).extend({ notify: 'always' });
                this.bothProgressBar = ko.observable(false).extend({ notify: 'always' });
                this.AllWeapons = ko.observableArray([]);
                this.AllJewelry = ko.observableArray([]);
                this.AllArmor = ko.observableArray([]);
                this.Export = ko.observable();
                this.Import = ko.observable();
                this.Search = ko.observable('').extend({ notify: 'always', rateLimit: 200 });
                this.UserPatchVersion = ko.observable('');
                this.FilteredArray = ko.observableArray([]);
                this.Search.subscribe((searchText) => {
                    if (searchText && searchText.length >= 2) {
                        //we need to search the array
                        self.FilteredArray([]);
                        self.searchArray(self.Armor, searchText, self.FilteredArray);
                        self.searchArray(self.Weapons, searchText, self.FilteredArray);
                        self.searchArray(self.Jewelry, searchText, self.FilteredArray);
                        if (self.FilteredArray().length > 0) {
                            self.FilteredArray.valueHasMutated();
                            $("a[href='#panel-search']").tab("show");
                        }
                    }
                    else {
                        $("a[href='#panel-armor']").tab("show");
                        self.FilteredArray([]);
                        $(".sticky").removeClass('sticky');
                        $(".sticky-progress").removeClass("sticky-progress");
                        $(".sticky-table").removeClass('sticky-table');
                    }
                });
                this.selectedLanguage = ko.observable('default');
                this.selectedLanguage.subscribe((newLang) => {
                    lang.selectedLang(newLang);
                });
                this.hasSeenLanguageAlert = ko.observable(false);
                this.hasSeenUpdateNotice = ko.observable(false);
                this.hasSeenUpdateNotice.subscribe((newVal) => {
                    if (newVal === true) {
                        self.UserPatchVersion(self.CurrentPatchVersion);
                    }
                });
                this.showLanguageAlert = ko.computed(() => {
                    switch (lang.culture()) {
                        case "de-DE":
                        case "de":
                            if (self.hasSeenLanguageAlert()) {
                                return false;
                            }
                            return true;
                        case "default":
                        default:
                            return false;
                    }
                });
            }
            searchArray(array, searchText, response) {
                var res = ko.utils.arrayFilter(array(), (item) => {
                    var lowerItemName, lowerAffix;
                    if (ko.isObservable(item)) {
                        item = item();
                    }
                    lowerItemName = ko.unwrap(item.itemName).toString().toLowerCase();
                    lowerAffix = ko.unwrap(item.affix).toString().toLowerCase();
                    return (lowerItemName.indexOf(searchText) !== -1) || (lowerAffix.indexOf(searchText) !== -1);
                });
                ko.utils.arrayPushAll(response(), res);
                return res.length > 0;
            }
            clear() {
                this.Weapons([]);
                this.Jewelry([]);
                this.Armor([]);
                this.selectedLanguage('default');
                this.hasSeenLanguageAlert(false);
                this.hasSeenUpdateNotice(true);
            }
            convertGermanItemsToEnglish() {
            }
            init() {
                var self = this;
                var vm = JSON.parse(localStorage.getItem(self.localStorageString));
                if (!vm) {
                    this.loadWeapons(self.Weapons);
                    this.loadJewelry(self.Jewelry);
                    this.loadArmor(self.Armor);
                    if (self.AllJewelry().length == 0) {
                        self.loadJewelry(self.AllJewelry);
                    }
                    if (self.AllWeapons().length == 0) {
                        self.loadWeapons(self.AllWeapons);
                    }
                    if (self.AllArmor().length == 0) {
                        self.loadArmor(self.AllArmor);
                    }
                    this.Weapons.sort(function (left, right) {
                        return left().itemName() == right().itemName() ? 0 : (left().itemName() < right().itemName() ? -1 : 1);
                    });
                    this.Armor.sort(function (left, right) {
                        return left().itemName() == right().itemName() ? 0 : (left().itemName() < right().itemName() ? -1 : 1);
                    });
                    this.Jewelry.sort(function (left, right) {
                        return left().itemName() == right().itemName() ? 0 : (left().itemName() < right().itemName() ? -1 : 1);
                    });
                    $.each(self.Armor(), function (i, elem) {
                        elem().isCubedSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem().isCubedNonSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem().isStashed.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                    });
                    $.each(self.Weapons(), function (i, elem) {
                        elem().isCubedSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem().isCubedNonSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem().isStashed.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                    });
                    $.each(self.Jewelry(), function (i, elem) {
                        elem().isCubedSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem().isCubedNonSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem().isStashed.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                    });
                    self.UserPatchVersion = ko.observable(self.CurrentPatchVersion);
                    self.hasSeenUpdateNotice(true);
                    localStorage.setItem(self.localStorageString, ko.mapping.toJSON(this));
                }
                else {
                    //This means they have a version of item data that pre-dates 2.4.1
                    if (!vm.UserPatchVersion) {
                        self.hasSeenUpdateNotice(false);
                        self.UserPatchVersion = ko.observable("2.4");
                    }
                    else if (vm.UserPatchVersion != self.CurrentPatchVersion) {
                        self.hasSeenUpdateNotice(false);
                    }
                    else {
                        self.hasSeenUpdateNotice(true);
                    }
                    if (vm.Jewelery) {
                        if (!self.Jewelry) {
                            self.Jewelry = ko.observableArray();
                        }
                        for (var i = 0; i < vm.Jewelery.length; i++) {
                            self.Jewelry.push(ko.mapping.fromJS(vm.Jewelery[i]));
                        }
                        delete vm.Jewelery;
                        vm.Jewelry = self.Jewelry();
                    }
                    if (!vm.Jewelry) {
                        if (!self.Jewelry) {
                            self.Jewelry = ko.observableArray();
                        }
                    }
                    ko.mapping.fromJS(vm, {
                        "include": ["hideCubed",
                            "hideCubedNonSeason",
                            "nonSeasonalProgressBar",
                            "hideNonSeasonalCheckboxes",
                            "hideSeasonalCheckboxes",
                            "seasonalProgressBar",
                            "bothProgressBar",
                            "hasSeenLanguageAlert",
                            "hasSeenUpdateNotice",
                            "selectedLanguage"
                        ],
                        "selectedLanguage": {
                            update: function (options) {
                                lang.selectedLang(options.data);
                                return options.data;
                            }
                        }
                    }, self);
                    this.checkConsistency();
                    this.saveToLocalStorage();
                    const save = (i, elem) => {
                        elem.isCubedSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem.isCubedNonSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem.isStashed.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                    };
                    $.each(self.Armor(), save);
                    $.each(self.Weapons(), save);
                    $.each(self.Jewelry(), save);
                    this.saveToLocalStorage();
                }
                const seasonalCount = (getItems) => {
                    return () => {
                        if (getItems().length > 0) {
                            return ko.utils.arrayFilter(getItems(), function (item) {
                                const elem = ko.unwrap(item);
                                return elem.isCubedSeason();
                            }).length;
                        }
                    };
                };
                this.ArmorSeasonalCubedCount = ko.computed(seasonalCount(self.Armor));
                this.WeaponSeasonalCubedCount = ko.computed(seasonalCount(self.Weapons));
                this.JewelrySeasonalCubedCount = ko.computed(seasonalCount(self.Jewelry));
                const nonSeasonalCount = (getItems) => {
                    return () => {
                        if (getItems().length > 0) {
                            return ko.utils.arrayFilter(getItems(), function (item) {
                                const elem = ko.unwrap(item);
                                return elem.isCubedNonSeason();
                            }).length;
                        }
                    };
                };
                this.ArmorNonSeasonalCubedCount = ko.computed(nonSeasonalCount(self.Armor));
                this.WeaponNonSeasonalCubedCount = ko.computed(nonSeasonalCount(self.Weapons));
                this.JewelryNonSeasonalCubedCount = ko.computed(nonSeasonalCount(self.Jewelry));
                const stashedCount = (getItems) => {
                    return () => {
                        return ko.utils.arrayFilter(getItems(), function (item) {
                            var elem = ko.unwrap(item);
                            return elem.isStashed() && !(elem.isCubedNonSeason() || elem.isCubedSeason());
                        }).length;
                    };
                };
                this.ArmorStashedCount = ko.computed(stashedCount(self.Armor));
                this.WeaponStashedCount = ko.computed(stashedCount(self.Weapons));
                this.JewelryStashedCount = ko.computed(stashedCount(self.Jewelry));
                const bothCount = (getItems) => {
                    return () => {
                        return ko.utils.arrayFilter(self.Armor(), (item) => {
                            let elem = ko.unwrap(item);
                            return elem.isCubedNonSeason() || elem.isCubedSeason();
                        }).length;
                    };
                };
                this.ArmorBothCubedCount = ko.computed(bothCount(self.Armor));
                this.WeaponBothCubedCount = ko.computed(bothCount(self.Weapons));
                this.JewelryBothCubedCount = ko.computed(bothCount(self.Jewelry));
                this.StashedCount = ko.computed(() => {
                    return this.JewelryStashedCount() + this.WeaponStashedCount() + this.ArmorStashedCount();
                });
                this.hideCubed.subscribe(self.saveToLocalStorage);
                this.hideCubedNonSeason.subscribe(self.saveToLocalStorage);
                this.hideNonSeasonalCheckboxes.subscribe(self.saveToLocalStorage);
                this.hideSeasonalCheckboxes.subscribe(self.saveToLocalStorage);
                this.nonSeasonalProgressBar.subscribe(self.saveToLocalStorage);
                this.seasonalProgressBar.subscribe(self.saveToLocalStorage);
                this.bothProgressBar.subscribe(self.saveToLocalStorage);
                this.hasSeenLanguageAlert.subscribe(self.saveToLocalStorage);
                if (!self.selectedLanguage() && !self.showLanguageAlert()) {
                    if (self.hasSeenLanguageAlert()) {
                        self.selectedLanguage(lang.culture());
                    }
                }
            }
            ConvertSeasonalToNon() {
                const categories = [this.Armor(), this.Jewelry(), this.Weapons()];
                for (const category of categories) {
                    for (const item in category) {
                        const thisItem = category[item];
                        if (thisItem.isCubedSeason()) {
                            thisItem.isCubedNonSeason(true);
                            thisItem.isCubedSeason(false);
                        }
                    }
                }
            }
            UpdateForNewPatch() {
                this.hasSeenUpdateNotice(true);
                this.ConvertSeasonalToNon();
                this.UserPatchVersion(this.CurrentPatchVersion);
                this.saveToLocalStorage();
            }
            DontUpdateForNewPatch() {
                this.hasSeenUpdateNotice(true);
                this.UserPatchVersion(this.CurrentPatchVersion);
                this.saveToLocalStorage();
            }
            Translate() {
                this.hasSeenLanguageAlert(true);
                this.selectedLanguage(lang.culture());
                this.saveToLocalStorage();
                this.init();
            }
            DontTranslate() {
                this.selectedLanguage('default');
                this.hasSeenLanguageAlert(true);
                this.init();
            }
            fillExport() {
                var self = this;
                this.Export(ko.mapping.toJSON(self));
            }
            saveToLocalStorage() {
                var self = this;
                localStorage[self.localStorageString] = null;
                delete this.Jewelery;
                localStorage.setItem(self.localStorageString, ko.mapping.toJSON(self, {
                    "ignore": ["AllWeapons",
                        "AllJewelry",
                        "FilteredArray",
                        "Search",
                        "Export",
                        "AllArmor",
                        "ArmorNonSeasonalCubedCount",
                        "ArmorSeasonalCubedCount",
                        "ArmorStashedCount",
                        "JewelryNonSeasonalCubedCount",
                        "JewelrySeasonalCubedCount",
                        "JewelryStashedCount",
                        "StashedCount",
                        "WeaponNonSeasonalCubedCount",
                        "WeaponSeasonalCubedCount",
                        "WeaponStashedCount",
                        "ArmorBothCubedCount",
                        "WeaponBothCubedCount",
                        "JewelryBothCubedCount",
                        "showLanguageAlert"
                    ]
                }));
            }
            // This function will return correct spelling of words that I typoed at some time without destroying user data or duplicating records
            spellcheckCorrect(searchName) {
                switch (searchName) {
                    case "Gundo Gear":
                        return { oldName: "Gundo Gear", newName: "Gungdo Gear" };
                    case "HwoJ Wrap":
                        return { oldName: "HwoJ Wrap", newName: "Hwoj Wrap" };
                    case "Illusionary Boots":
                        return { oldName: "Illusionary Boots", newName: "Illusory Boots" };
                    case "Remorsless":
                        return { oldName: "Remorsless", newName: "Remorseless" };
                    case "Ahavarion,Spear of Lycander":
                        return { oldName: "Ahavarion,Spear of Lycander", newName: "Ahavarion, Spear of Lycander" };
                    case "Chaigmail":
                        return { oldName: "Chaigmail", newName: "Chaingmail" };
                }
                return null;
            }
            _checkConsistencyAndSort(searchArray, masterList) {
                var self = this;
                for (var i = 0; i < searchArray().length; i++) {
                    var convert;
                    if ((lang.culture() == 'de' || lang.culture() == 'de-DE') && (!lang.selectedLang() || lang.selectedLang() == 'default')) {
                        convert = lang.cultureToEnglish(searchArray()[i]);
                    }
                    else {
                        convert = lang.englishToCulture(searchArray()[i]);
                    }
                    searchArray()[i].itemName(convert.itemName());
                    searchArray()[i].affix(convert.affix());
                }
                for (var i = 0; i < masterList.length; i++) {
                    if (masterList[i]) {
                        var searchName, item;
                        debugger;
                        if (typeof (masterList[i]) != 'object') {
                            searchName = masterList[i]().itemName();
                            item = masterList[i]();
                        }
                        else {
                            searchName = masterList[i].itemName();
                            item = masterList[i];
                        }
                        // this will go through both arrays and match items up
                        var find = ko.utils.arrayFirst(searchArray(), function (item) {
                            var spellCheck = self.spellcheckCorrect(item.itemName());
                            if (spellCheck && spellCheck.oldName == item.itemName()) {
                                item.itemName(spellCheck.newName);
                            }
                            return item.itemName() === searchName;
                        });
                        if (find == null) {
                            searchArray.push(ko.mapping.fromJS(item));
                        }
                        else {
                            find.affix(item.affix());
                        }
                    }
                }
                searchArray.sort(function (left, right) {
                    return left.itemName() == right.itemName() ? 0 : (left.itemName() < right.itemName() ? -1 : 1);
                });
            }
            importValues() {
                var self = this;
                if (self.Import()) {
                    if (confirm(lang.importConfirm())) {
                        var importData = ko.mapping.fromJSON(self.Import());
                        self.Jewelry(importData.Jewelry());
                        self.Armor(importData.Armor());
                        self.Weapons(importData.Weapons());
                        self.hasSeenUpdateNotice(true);
                        self.checkConsistency();
                        self.saveToLocalStorage();
                    }
                }
            }
            checkConsistency() {
                let self = this;
                this.loadWeapons(this.AllWeapons);
                this.loadJewelry(this.AllJewelry);
                this.loadArmor(this.AllArmor);
                self._checkConsistencyAndSort(self.Armor, self.AllArmor());
                self._checkConsistencyAndSort(self.Weapons, self.AllWeapons());
                //This item accidently made it to the US item list
                if (lang.culture() != 'de' || lang.culture() != 'de-DE') {
                    let item = ko.utils.arrayFirst(self.Armor(), function (item) {
                        return item.itemName() == "Eiskletterer";
                    });
                    if (item) {
                        self.Armor.remove(item);
                    }
                }
                self._checkConsistencyAndSort(self.Jewelry, self.AllJewelry());
                self.saveToLocalStorage();
            }
            loadFromLocalStorage(vm) {
                this.Armor = vm.Armor;
                this.Weapons = vm.Weapons;
                this.Jewelry = vm.Jewelry;
            }
            loadArmor(target) {
                target([]);
                lang.getArmor(target);
            }
            loadWeapons(target) {
                target([]);
                lang.getWeapons(target);
            }
            loadJewelry(target) {
                target([]);
                lang.getJewelry(target);
            }
        }
        VM.Site = Site;
    })(VM = Kanai.VM || (Kanai.VM = {}));
})(Kanai || (Kanai = {}));
