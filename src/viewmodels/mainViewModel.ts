import {components} from 'knockout'
export class MainViewModel {
    constructor() {

    }
}

export function registerControl() {
    components.register('mainview', { template: require('../views/mainView.html') });
    //require("../views/mainView.css");
}