import { Fragment } from "react"
import { Form, Segment } from "semantic-ui-react"

function QuotaTab({ form, setForm }) {

    return (
        <Fragment>
            <Segment>
                <Form.Group widths={"equal"}>
                    <Form.Input name={"maxgalaxy"} label={"Max In Galaxy"} value={form.quota !== undefined ? form.quota.maxgalaxy : ""} onChange={e => {
                        setForm({ ...form, quota: { ...form.quota, maxgalaxy: e.target.value } })
                    }} />
                    <Form.Input name={"galaxy"} label={"Galaxy"} value={form.quota !== undefined ? form.quota.galaxy : ""} onChange={e => {
                        setForm({ ...form, quota: { ...form.quota, galaxy: e.target.value } })
                    }} />
                    <Form.Input name={"cluster"} label={"Cluster"} value={form.quota !== undefined ? form.quota.cluster : ""} onChange={e => {
                        setForm({ ...form, quota: { ...form.quota, cluster: e.target.value } })
                    }} />
                    <Form.Input name={"sector"} label={"Sector"} value={form.quota !== undefined ? form.quota.sector : ""} onChange={e => {
                        setForm({ ...form, quota: { ...form.quota, sector: e.target.value } })
                    }} />
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Input name={"zone"} label={"Zone"} value={form.quota !== undefined ? form.quota.zone : ""} onChange={e => {
                        setForm({ ...form, quota: { ...form.quota, zone: e.target.value } })
                    }} />
                    <Form.Input name={"station"} label={"Station"} value={form.quota !== undefined ? form.quota.station : ""} onChange={e => {
                        setForm({ ...form, quota: { ...form.quota, station: e.target.value } })
                    }} />
                    <Form.Input name={"wing"} label={"Wing"} value={form.quota !== undefined ? form.quota.wing : ""} onChange={e => {
                        setForm({ ...form, quota: { ...form.quota, wing: e.target.value } })
                    }} />
                    <Form.Input name={"variation"} label={"Variation"} value={form.quota !== undefined ? form.quota.variation : ""} onChange={e => {
                        setForm({ ...form, quota: { ...form.quota, variation: e.target.value } })
                    }} />
                </Form.Group>
            </Segment>
        </Fragment>
    )
}

export default QuotaTab