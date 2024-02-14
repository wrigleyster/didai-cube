//import {itemsEN} from 'items-en';
//import {itemsDE} from 'items-de';
//import {i18n, n18i} from 'i18n';
//import * as ko from "knockout";
//import {Kanai} from 'models/equipment'
const lang = {
    //    culture: ko.observable("de"),
    selectedLang: ko.observable('default'),
    culture: ko.observable(navigator.userLanguage || navigator.language),
    "bothSettingsHeader": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Both";
            case "de-DE":
            case "de":
                return "Beide";
        }
    },
    "updateNoticeHeader": function () {
        return "With the update to 2.4.1, would you like to convert all of your seasonal items to non-seasonal? This action cannot be undone.";
    },
    "showBothProgressBar": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Show progress bar for both";
            case "de-DE":
            case "de":
                return "Zeige Fortschrittsbalken für beide";
        }
    },
    "bothProgressBarLabel": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Both";
            case "de-DE":
            case "de":
                return "Beide";
        }
    },
    "searchPlaceholder": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Search";
            case "de-DE":
            case "de":
                return "Suche";
        }
    },
    "pleaseRead": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "<strong>Please read:</strong> This site makes use of <a href='http://www.html5rocks.com/en/features/storage'>HTML5 localstorage</a> to store your information. This information is never sent to a server, and will only persist on the device that you set this up on.";
            case "de-DE":
            case "de":
                return "<strong>Bitte lesen:</strong> Diese Seite benutzt <a href='http://www.html5rocks.com/en/features/storage'>HTML5 localstorage</a> um ihre Informationen zu speichern. Diese Informationen werden niemals an einen Server gesendet und verweilen nur auf dem Gerät, das Sie benutzen.";
        }
    },
    "problem": function () {
        switch (this.selectedLang()) {
            default:
                return "This project has been abandoned and will not be updated further.";
        }
    },
    "armor": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Armor";
            case "de-DE":
            case "de":
                return "Rüstung";
        }
    },
    "weapon": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Weapon";
            case "de-DE":
            case "de":
                return "Waffe";
        }
    },
    "weapons": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Weapons";
            case "de-DE":
            case "de":
                return "Waffen";
        }
    },
    "jewelry": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Jewelry";
            case "de-DE":
            case "de":
                return "Schmuck";
        }
    },
    "stashedItems": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Stashed Items";
            case "de-DE":
            case "de":
                return "Gelagerte Items";
        }
    },
    "totalCubed": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return lang.total() + " Cubed";
        }
    },
    "total": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Total";
        }
    },
    "settings": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Settings";
            case "de-DE":
            case "de":
                return "Einstellungen";
        }
    },
    "configure": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Configure";
            case "de-DE":
            case "de":
                return "Konfiguration";
        }
    },
    "seasonalSettingsHeader": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Seasonal Settings:";
            case "de-DE":
            case "de":
                return "Saisonale Einstellungen";
        }
    },
    "nonSeasonalSettingsHeader": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Non-Seasonal Settings:";
            case "de-DE":
            case "de":
                return "Nicht-Saisonale Einstellungen";
        }
    },
    "hideCubed": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Hide Cubed";
            case "de-DE":
            case "de":
                return "Verstecke Würfel";
        }
    },
    "showProgressBar": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Show Progress Bar";
            case "de-DE":
            case "de":
                return "Zeige Fortschrittsbalken";
        }
    },
    "export": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Export";
            case "de-DE":
            case "de":
                return "Exportieren";
        }
    },
    "exportWarning": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "The below will allow you to copy/paste your data into the import field.";
            case "de-DE":
            case "de":
                return "Unten kannst du deine Daten in das Feld hineinkopieren und importieren.";
        }
    },
    "import": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Import";
            case "de-DE":
            case "de":
                return "Importieren";
        }
    },
    "importWarning": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Importing will override ALL of your current selections. Do so with caution.";
            case "de-DE":
            case "de":
                return "Eine Importierung wird ALLE deine bisherigen Daten überschreiben. Sei Vorsichtig.";
        }
    },
    "importConfirm": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Importing values will override all of your current selections. Are you sure you want to do this?";
            case "de-DE":
            case "de":
                return "Importierung der Werte wird deine Daten überschreiben. Bist du sicher, dass du das machen willst?";
        }
    },
    "refreshFromSite": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Refresh from Site";
            case "de-DE":
            case "de":
                return "Aktualisierung";
        }
    },
    "refreshWarning": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "This option will remove all data in local storage (including your selections) and refresh the grid. Are you sure you want to do this?";
            case "de-DE":
            case "de":
                return "Diese Option wird deinen lokalen Speicher (inklusive deiner Auswahl)entfernen und die Tabelle zurücksetzen. Bist du sicher, dass du das machen willst?";
        }
    },
    "seasonal": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Seasonal";
            case "de-DE":
            case "de":
                return "Saisonal";
        }
    },
    "seasonalProgress": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return lang.seasonal() + " Progress";
        }
    },
    "nonSeasonal": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Non-Seasonal";
            case "de-DE":
            case "de":
                return "Nicht-Saisonal";
        }
    },
    "name": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Name";
            case "de-DE":
            case "de":
                return "Name";
        }
    },
    "cubedSeasonal": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Cubed - Seasonal";
            case "de-DE":
            case "de":
                return "Würfel - Saisonal";
        }
    },
    "hideSeasonalCheckboxes": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Hide Seasonal Checkboxes";
            case "de-DE":
            case "de":
                return "Verstecke Saisonale Kontrollkästchen";
        }
    },
    "hideNonSeasonalCheckboxes": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Hide Non-Seasonal Checkboxes";
            case "de-DE":
            case "de":
                return "Verstecke Nicht-Saisonale Kontrollkästchen";
        }
    },
    "cubedNonSeasonal": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Cubed - Non-Seasonal";
            case "de-DE":
            case "de":
                return "Würfel - Nicht-Saisonal";
        }
    },
    "stashed": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Stashed";
            case "de-DE":
            case "de":
                return "Gelagert";
        }
    },
    "affix": function () {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                return "Affix";
            case "de-DE":
            case "de":
                return "Affix";
        }
    },
    cultureToEnglish: function (item: KnockoutObservable<Kanai.Equipment>) {//{{{
        const _item = ko.unwrap(item);
        try {
            switch (this.culture()) {
                case "de":
                case "de-DE":
                    const englishName = n18i[ko.unwrap(_item.itemName)];
                    for(const type of  [itemsEN.armor, itemsEN.jewelry, itemsEN.weapons]) {
                        for(const item of type) {
                            if(item[0] === englishName) {
                                return new Kanai.Equipment(item[0], item[1]);
                            }
                        }
                    }
                    return item;
                default:
                    return item;
            }
        } catch (ex) {
        }
    },//}}}
    englishToCulture: function (item: KnockoutObservable<Kanai.Equipment>) {
        const _item = ko.unwrap(item);
        try {
            switch (this.selectedLang()) {
                case "en-US":
                case "default":
                default:
                    return item;
                case "de-DE":
                case "de":
                    const germanName = i18n[ko.unwrap(_item.itemName)];
                    for(const type of [itemsDE.armor, itemsDE.jewelry, itemsDE.weapons]) {
                        for (const item of type) {
                            if (item[0] === germanName) {
                                return new Kanai.Equipment(item[0], item[1]);
                            }
                        }
                    }
                    return item;
            }
        } catch (ex) {
        }
    },
    getArmor(target: KnockoutObservableArray<KnockoutObservable<Kanai.Equipment>>, culture?: string) {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                {
                    for(const armor of itemsEN.armor) {
                        target.push(ko.observable(new Kanai.Equipment(armor[0], armor[1])));
                    }
                    break;
                }
            case "de-DE":
            case "de":
                for(const armor of itemsDE.armor) {
                    target.push(ko.observable(new Kanai.Equipment(armor[0], armor[1])));
                }
                break;
        }
    },
    getWeapons(target: KnockoutObservableArray<KnockoutObservable<Kanai.Equipment>>) {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default: {
                for(const weapon of itemsEN.weapons) {
                    target.push(ko.observable(new Kanai.Equipment(weapon[0], weapon[1])));
                }
                break;
            }
            case "de-DE":
            case "de":
                for(const  weapon of itemsDE.weapons) {
                    target.push(ko.observable(new Kanai.Equipment(weapon[0], weapon[1])));
                }
        }
    },
    getJewelry(target: KnockoutObservableArray<KnockoutObservable<Kanai.Equipment>>) {
        switch (this.selectedLang()) {
            case "en-US":
            case "default":
            default:
                for(const jewel of itemsEN.jewelry) {
                    target.push(ko.observable(new Kanai.Equipment(jewel[0],jewel[1])));
                }
                break;
            case "de-DE":
            case "de":
                for(const jewel of itemsDE.jewelry) {
                    target.push(ko.observable(new Kanai.Equipment(jewel[0],jewel[1])));
                }
        }
    }
}
