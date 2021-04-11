import { Fragment } from "react";
import { Button, Segment, Table } from "semantic-ui-react";

function EconomyMaster({ products, selectProduct, prepareNewProduct, removeProduct }) {

    return (
        <Fragment>
            <Segment textAlign="right">
                <Button onClick={prepareNewProduct}>Add</Button>
            </Segment>
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ware</Table.HeaderCell>
                        <Table.HeaderCell>Race</Table.HeaderCell>
                        <Table.HeaderCell>Faction</Table.HeaderCell>
                        <Table.HeaderCell>Galaxy</Table.HeaderCell>
                        <Table.HeaderCell>Cluster</Table.HeaderCell>
                        <Table.HeaderCell>Sector</Table.HeaderCell>
                        <Table.HeaderCell>Zone</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        products &&
                        products.map((product, index) => {
                            return (
                                <Table.Row key={index}>
                                    <Table.Cell onClick={() => { selectProduct(product) }}>{product.ware}</Table.Cell>
                                    <Table.Cell onClick={() => { selectProduct(product) }}>{product.race}</Table.Cell>
                                    <Table.Cell onClick={() => { selectProduct(product) }}>{product.owner}</Table.Cell>
                                    <Table.Cell onClick={() => { selectProduct(product) }}>{product.galaxyQuota}</Table.Cell>
                                    <Table.Cell onClick={() => { selectProduct(product) }}>{product.clusterQuota}</Table.Cell>
                                    <Table.Cell onClick={() => { selectProduct(product) }}>{product.sectorQuota}</Table.Cell>
                                    <Table.Cell onClick={() => { selectProduct(product) }}>{product.zoneQuota}</Table.Cell>
                                    <Table.Cell><Button type="button" onClick={() => { removeProduct(product) }} >Delete</Button></Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
        </Fragment>
    )
}

export default EconomyMaster