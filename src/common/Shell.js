import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import VehicleMakeList from '../modules/vehicle-make/pages/VehicleMakeList';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';

const viewMap = {
    makeList: <VehicleMakeList />,
    home: <HomePage />,
    notFound: <NotFoundPage />
};

export const Shell = inject('rootStore')(
    class extends React.Component {
        render() {
            const { rootStore } = this.props;
            const { routerStore } = rootStore;

            return <RouterView routerStore={routerStore} viewMap={viewMap} />;
        }
    }
);