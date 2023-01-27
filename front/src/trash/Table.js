import React, { useState } from "react";
import { Table, Input } from "antd";
import axios from "axios";
import { userColumns } from "../frontend/components/columns";
import { useTableSearch } from "./useTableSearch";
import {GetDataMarkerJSON} from "../frontend/requests/RequestToAddMarkerToJSON";

const { Search } = Input;

const fetchUsers = async () => {
    const { data } = await axios.get(
        "https://localhost:5000/data"
    );
    // const { data } = await GetDataMarkerJSON()
    console.log(data)
    return { data };
};

export default function TableNew() {
    const [searchVal, setSearchVal] = useState(null);

    const { filteredData, loading } = useTableSearch({
        searchVal,
        retrieve: fetchUsers
    });

    return (
        <>
            <Search
                onChange={e => setSearchVal(e.target.value)}
                placeholder="Search"
                enterButton
                style={{ position: "sticky", top: "0", left: "0" }}
            />
            <br /> <br />
            <Table
                rowKey="name"
                dataSource={filteredData}
                columns={userColumns}
                loading={loading}
                pagination={false}
            />
        </>
    );
}
