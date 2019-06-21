import { RouterState, RouterStore } from 'mobx-state-router';
import { routes } from '../routes';
import { VehicleMakeModuleStore } from '../../modules/vehicle-make/stores/'

const notFound = new RouterState('notFound');

class RootStore {

    routerStore = new RouterStore(this, routes, notFound);

    constructor() {
        this.vehicleMakeModuleStore = new VehicleMakeModuleStore(this);
    }

}

export default RootStore;