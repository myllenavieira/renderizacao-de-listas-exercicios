import { Tarefa } from "./styled";

export const ListaCompletos = (props) => {
    return (
        <Tarefa>
            <s>{props.tarefa}</s>
        </Tarefa>)

}