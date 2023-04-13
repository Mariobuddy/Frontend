import React from 'react'
import styled from 'styled-components';

const Currency = ({price}) => {

return Intl.NumberFormat('en-IN',{
    style:'currency',
    currency:'INR',
    maximumFractionDigits:0

}).format(price);

}

export default Currency;


const Wrapper=styled.div`



`;