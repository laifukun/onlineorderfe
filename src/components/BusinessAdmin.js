import { useEffect, useState } from "react";
import { Menu, Button, List } from 'antd';


const BusinessAdmin = () => {
    return (
        <div>
            <List
                size="large"
                header={<div>My Restaurants</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
                />
        </div>
    )
}

export default BusinessAdmin
