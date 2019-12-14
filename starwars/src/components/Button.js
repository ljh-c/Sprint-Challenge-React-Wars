import React from 'react';
import { Button } from 'reactstrap';

const FilterButton = ({ removeCameos }) => {
  return (
    <Button color="warning" size="lg" onClick={removeCameos}>Filter Cameos</Button>
  );
}

export default FilterButton;