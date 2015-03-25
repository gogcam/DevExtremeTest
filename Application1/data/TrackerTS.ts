/// <reference path="../ts/jquery.d.ts" />
/// <reference path="../ts/globalize.d.ts" />
/// <reference path="../ts/knockout.d.ts" />
/// <reference path="../ts/dx.all.d.ts" />
class TrackerBla {
    fullname: string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }


}