import { Button, Segment, Table } from "semantic-ui-react";
import { Fragment } from 'react';

function JobMaster({ jobs, selectJob, prepareNewJob, removeJob }) {
    
    return (
        <Fragment>
            <Segment textAlign="right">
                <Button onClick={() => { prepareNewJob() }}>Add</Button>
            </Segment>
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Basket</Table.HeaderCell>
                        <Table.HeaderCell>Disabled</Table.HeaderCell>
                        <Table.HeaderCell>Start Active</Table.HeaderCell>
                        <Table.HeaderCell>Ignore Commander Wares</Table.HeaderCell>
                        <Table.HeaderCell>Comment</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        jobs &&
                        jobs.map((job, index) => {
                            return (
                                <Table.Row key={index}>
                                    <Table.Cell onClick={() => { selectJob(job) }}>{job.id}</Table.Cell>
                                    <Table.Cell onClick={() => { selectJob(job) }}>{job.name}</Table.Cell>
                                    <Table.Cell onClick={() => { selectJob(job) }}>{job.basket}</Table.Cell>
                                    <Table.Cell onClick={() => { selectJob(job) }}>{job.disabled !== undefined ? job.disabled.toString() : "false"}</Table.Cell>
                                    <Table.Cell onClick={() => { selectJob(job) }}>{job.startActive !== undefined ? job.startActive.toString() : "false"}</Table.Cell>
                                    <Table.Cell onClick={() => { selectJob(job) }}>{job.ignoreCommanderWares !== undefined ? job.ignoreCommanderWares.toString() : "false"}</Table.Cell>
                                    <Table.Cell onClick={() => { selectJob(job) }}>{job.comment}</Table.Cell>
                                    <Table.Cell><Button type="button" onClick={() => { removeJob(job) }} >Delete</Button></Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
        </Fragment>
    )
}

export default JobMaster