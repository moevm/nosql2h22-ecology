import * as React from 'react';
import './Map.css'
import GetDataFromServerButton from "./GetDataFromServerButton";
import {useNavigate} from "react-router-dom";
import {
    Table,
    Header,
    HeaderRow,
    HeaderCell,
    Body,
    Row,
    Cell,
} from '@table-library/react-table-library/table';
import {useState} from "react";

const list = [
    {
        id: '1',
        name: 'VSCode',
        deadline: new Date(2020, 1, 17),
        type: 'SETUP',
        isComplete: true,
    },
    {
        id: '2',
        name: 'JavaScript',
        deadline: new Date(2020, 2, 28),
        type: 'LEARN',
        isComplete: true,
    },
    {
        id: '3',
        name: 'React',
        deadline: new Date(2020, 3, 8),
        type: 'LEARN',
        isComplete: false,
    }
];

const data2 = [
    {lat: 22.222, lon: 19.13, name: "ETU", desc: "ab", last_change: new Date(2022, 0, 14, 10, 32)},
    {lat: 22.21212, lon: 19.14, name: "ITMO", desc: "ab", last_change: new Date(2022, 0, 14, 10, 31)},
    {lat: 10.122, lon: 19.15, name: "MSU", desc: "ab", last_change: new Date(2022, 0, 14, 10, 30)},
]
export default function DataTableWitchSearch() {
    const [search, setSearch] = React.useState('');
    const [dataMarkers, setDataMarkers] = useState(data2);
    const navigate = useNavigate();
    const data = {
        nodes: dataMarkers.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        ),
    };
    const childToParent = (childdata) => {
        console.log(childdata)
        setDataMarkers(childdata);
    }


    const navigateHome = () => {
        navigate('/MapAdmin');
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };


    return (
        <div>
            <GetDataFromServerButton childToParent={childToParent}/>
            <label htmlFor="search">
                Search by Name:
                <input id="search" type="text" onChange={handleSearch}/>
            </label>
            <Table data={data}>{(tableList) => (
                <>
                    <Header>
                        <HeaderRow>
                            <HeaderCell>Name</HeaderCell>
                            <HeaderCell>Latitide</HeaderCell>
                            <HeaderCell>Longitude</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Last Time Change</HeaderCell>
                        </HeaderRow>
                    </Header>

                    <Body>
                        {tableList.map((item) => (
                            // <Row key={item.id} item={item}>
                            <Row item={item}>
                                <Cell>{item.name}</Cell>

                                <Cell>{item.lat}</Cell>
                                <Cell>{item.lon}</Cell>
                                <Cell>{item.desc}</Cell>
                                <Cell>
                                    {item.last_change.toLocaleDateString(
                                        'ru',
                                        {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                            hour: 'numeric',
                                            minute: 'numeric'
                                        }
                                    ) || ''}
                                </Cell>
                            </Row>
                        ))}
                    </Body>
                </>
            )}</Table>

            <button className={"DataTable-button"} onClick={navigateHome}>DataTable</button>

        </div>


    )
};
