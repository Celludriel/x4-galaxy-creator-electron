import { Fragment } from "react";
import { Button, Segment, Table } from "semantic-ui-react";

function EconomyMaster({ products, selectProduct, prepareNewProduct }) {

    return (
        <Fragment>
            <Segment textAlign="right">
                <Button onClick={prepareNewProduct}>Add</Button>
            </Segment>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ware</Table.HeaderCell>
                        <Table.HeaderCell>Race</Table.HeaderCell>
                        <Table.HeaderCell>Faction</Table.HeaderCell>
                        <Table.HeaderCell>Galaxy</Table.HeaderCell>
                        <Table.HeaderCell>Cluster</Table.HeaderCell>
                        <Table.HeaderCell>Sector</Table.HeaderCell>
                        <Table.HeaderCell>Zone</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        products &&
                        products.map((product, index) => {
                            return (
                                <Table.Row key={index} onClick={() => { selectProduct(product) }}>
                                    <Table.Cell>{product.ware}</Table.Cell>
                                    <Table.Cell>{product.race}</Table.Cell>
                                    <Table.Cell>{product.owner}</Table.Cell>
                                    <Table.Cell>{product.galaxyQuota}</Table.Cell>
                                    <Table.Cell>{product.clusterQuota}</Table.Cell>
                                    <Table.Cell>{product.sectorQuota}</Table.Cell>
                                    <Table.Cell>{product.zoneQuota}</Table.Cell>
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