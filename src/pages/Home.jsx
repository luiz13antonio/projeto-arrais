import { Button } from "antd";
import { Table } from "antd";
import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";
const Home = () => {
    const [dados, setDados] = useState([]);


    function buscarDados() {
        fetch("https://projeto-arrais-api.onrender.com/aquisicoes")
        .then(res =>res.json())
        .then(res => {
            setDados(res);
        })
    }

    useEffect(() => {
        buscarDados();
    }, [])
    const dadosFalsos = [
        {
            CD_AQUISICAO: 1,
            NR_PLACA: "POR1297",
            NM_COR: "Branco",
            NM_ANO: "2019",
            NM_MODELO: "FIAT MOBI",
            VL_VEICULO: "44000"
        },
        {
            CD_AQUISICAO: 2,
            NR_PLACA: "NAM 3276",
            NM_COR: "Preto",
            NM_ANO: "2021",
            NM_MODELO: "CHEVROLET ONIX",
            VL_VEICULO: "75000"
        }
    ]

    return (
        <>
            <div className="w-full h-[50px] flex justify-end items-center">
                
            </div>
            <section>
                <h1 className="text-2xl font-bold mb-4">Tabela de veículos</h1>
                <Table
                    dataSource={dados}
                >
                    <Table.Column
                        key={"CD_AQUISICAO"}
                        title={"ID"}
                        dataIndex={"CD_AQUISICAO"}
                    />
                    <Table.Column
                        key={"NR_PLACA"}
                        title={"Placa"}
                        dataIndex={"NR_PLACA"}
                    />
                    <Table.Column
                        key={"NM_COR"}
                        title={"Cor"}
                        dataIndex={"NM_COR"}
                    />
                    <Table.Column
                        key={"NM_ANO"}
                        title={"Ano"}
                        dataIndex={"NM_ANO"}
                    />
                    <Table.Column
                        key={"NM_MODELO"}
                        title={"Modelo"}
                        dataIndex={"NM_MODELO"}
                    />
                    <Table.Column
                        key={"VL_VEICULO"}
                        title={"Valor"}
                        dataIndex={"VL_VEICULO"}
                    />
                </Table>
            </section>
        </>
    );
}

export default Home;