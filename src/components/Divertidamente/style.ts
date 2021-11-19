import styled from 'styled-components';

export const Container = styled.div((props: { index: number; color: string;})=>(
    `
    display: flex;
    flex-direction: ${ props.index % 2 === 0 ? 'row' : 'row-reverse'};
    padding: 10px;
    border-radius: 10px;
    border-width:1px;  
    border-style:solid;
    border-color: ${props.color};
    margin-bottom: 10px;
    align-item: center;
    width: 900px;
    img {
        width: 80%;
    }
    label{
        color:white;
    }
    #imagem{
        width: 30%;
        align-item:center;
        float:right;
    }
    #conteudo{
        color: white;
        width: 70%;
        align-item:center;
        float:left;
    }

    p{
        font-size: 1rem;
    }
`
));