import { observable, action } from 'mobx';

class BaseDataStore {
    @observable data = null;

    constructor(data) {
        if (!data) {
            throw new Error('error');
        } else {
            this.data = data;
        }
    }



    find(filterString, sortByProperty, sortByAscDesc, activePage, itemsCountPerPage) {

        let data = this.data.slice();

        console.log(data);
        console.log(data.length);
        if (data !== null && data !== '') {
            data = data.filter(item => item.name.toLowerCase().indexOf(filterString.toLowerCase()) > -1);
        }

        if (sortByProperty === 'id') {
            data = data.sort((a, b) => {
                return sortByAscDesc === 'ASC' ? a.id - b.id : b.id - a.id;
            })
        } else if ((sortByProperty === 'name' && sortByAscDesc === 'ASC') || (sortByProperty === 'abrv' && sortByAscDesc === 'ASC')) {
            data = data.sort(function (a, b) {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            });
        } else if ((sortByProperty === 'name' && sortByAscDesc === 'DESC') || (sortByProperty === 'abrv' && sortByAscDesc === 'DESC')) {
            data = data.sort(function (a, b) {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            }).reverse();
        }

        let totalItemsCount = data.length;

        data = data.slice((activePage - 1) * itemsCountPerPage, activePage * itemsCountPerPage);


        return {
            filterString: filterString,
            sortByProperty: sortByProperty,
            sortByAscDesc: sortByAscDesc,
            totalItemsCount: totalItemsCount,
            items: data
        }

    }
}

// @action.bound getId() {

// }

// @action.bound add() {

// }

// @action.bound edit() {

// }

// @action.bound remove() {

// }

export default BaseDataStore;