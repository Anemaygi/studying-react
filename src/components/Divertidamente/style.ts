import styled from 'styled-components';

export const Container = styled.div((props: { index: number;})=>(
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-item: center;
    
    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label{
        color:white;
    }
    
`
));