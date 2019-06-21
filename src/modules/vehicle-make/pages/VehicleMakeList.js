import React from 'react';
import { observer, inject } from 'mobx-react';
import Pagination from "react-js-pagination";


@inject(stores => ({
    rootStore: stores.rootStore,
    vehicleMakeListViewStore: stores.rootStore.vehicleMakeModuleStore.vehicleMakeListViewStore
}))


@observer class VehicleMakeList extends React.Component {
    render() {

        const { makeItems: MakeItems, setFilterByName, setByProperty, setByAscDesc, setActivePage, itemsCountPerPage, activePage } = this.props.vehicleMakeListViewStore;
        const { filterString, sortByProperty, sortByAscDesc, totalItemsCount, items } = MakeItems;


        console.log(itemsCountPerPage);
        console.log(activePage);
        return (
            <React.Fragment>
                <h2>Vehicle Makes</h2>
                <input type="text" value={filterString} onChange={e => setFilterByName(e.target.value)} />
                <select value={sortByProperty} onChange={e => setByProperty(e.target.value)}>
                    <option value="id">ID</option>
                    <option value="name">NAME</option>
                    <option value="abrv">ABRV.</option>
                </select>
                <button value={sortByAscDesc} onClick={e => setByAscDesc(e.target.value)}>{sortByAscDesc}</button>
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Abrv.</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>

                        {items.map((vehicleMake) => {
                            return (
                                <tr key={vehicleMake.id}>
                                    <td>{vehicleMake.id}</td>
                                    <td>{vehicleMake.name}</td>
                                    <td>{vehicleMake.abrv}</td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Pagination
                    prevPageText='prev'
                    nextPageText='next'
                    firstPageText='first'
                    lastPageText='last'
                    activePage={activePage}
                    itemsCountPerPage={itemsCountPerPage}
                    totalItemsCount={totalItemsCount}
                    onChange={setActivePage}
                />
            </React.Fragment>
        );
    }
}

export default VehicleMakeList;