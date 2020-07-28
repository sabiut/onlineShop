import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Productoverviewscreen = props =>{
props={products};
const products = useSelector(state => state.product.availableProducts);

return (
<FlatList
    data={products}
    keyextractor = {item =>item.id}
    renderItem = {itemData => <Text>{itemData.item.title}</Text>}

/>
)};

export default Productoverviewscreen;
