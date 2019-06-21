import { action, observable, computed } from 'mobx';

class VehicleMakeListViewStore {
    constructor(moduleStore) {
        this.moduleStore = moduleStore;
        this.vehicleMakeStore = moduleStore.vehicleMakeStore;
    }

    @observable filterString = '';
    @observable sortByProperty = 'id';
    @observable sortByAscDesc = 'ASC';
    @observable itemsCountPerPage = 5;
    @observable activePage = 2;


    @computed get makeItems() {
        return this.vehicleMakeStore.find(this.filterString, this.sortByProperty, this.sortByAscDesc, this.activePage, this.itemsCountPerPage);
    }


    @action.bound setFilterByName(inputString) {
        this.filterString = inputString;
    }

    @action.bound setByProperty(newProperty) {
        this.sortByProperty = newProperty;
    }

    @action.bound setByAscDesc(ascDesc) {
        if (ascDesc === 'ASC') {
            this.sortByAscDesc = 'DESC';
        } else {
            this.sortByAscDesc = 'ASC';
        }
    }

    @action.bound setActivePage(newPage) {
        this.activePage = newPage;
    }









}

export default VehicleMakeListViewStore;