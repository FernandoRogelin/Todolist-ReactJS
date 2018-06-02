import styled from 'styled-components';

export const TodoItem = styled.input`
    height: 30px;
    width: 200px;
    outline: none;
    padding-left: 15px;
`;

export const AdicionaItem = styled.button`
    color: #fff;
    height: 34px;
    cursor: pointer;
    margin-left: 3px;
    border: 1px solid #fff;
    background-color: #ff6666;
`;

export const Itens = styled.div`
    color: #fff;
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
`;

export const Excluir = styled.button`
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
`;