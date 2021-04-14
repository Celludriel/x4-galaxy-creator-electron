import { Fragment } from "react"
import { Form, Segment } from "semantic-ui-react"
import JobService from "../../service/jobservice"

function BasicInformationTab({ form, setForm }) {

    return (
        <Fragment>
            <Segment>
                <Form.Group widths={"equal"}>
                    <Form.Input name={"id"} label={"Id"} value={form.id} onChange={e => {
                        setForm({ ...form, id: e.target.value })
                    }} />
                    <Form.Input name={"name"} label={"Name"} value={form.name} onChange={e => {
                        setForm({ ...form, name: e.target.value })
                    }} />
                    <Form.Input name={"comment"} label={"Comment"} value={form.comment} onChange={e => {
                        setForm({ ...form, comment: e.target.value })
                    }} />
                    <Form.Dropdown label={'Basket'} placeholder='Basket' search selection options={JobService.getBasketOptions()} value={form.basket}
                        onChange={(e, obj) => {
                            setForm({ ...form, basket: obj.value })}}
                        />
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Input name={"task"} label={"Task"} value={form.task} onChange={e => {
                        setForm({ ...form, task: e.target.value })
                    }} />
                    <Form.Input name={"encounters"} label={"Encounters"} value={form.encounters} onChange={e => {
                        setForm({ ...form, encounters: e.target.value })
                    }} />
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Checkbox name={"disabled"} label='Disabled'
                        checked={form.disabled} onChange={(e, data) => {
                            setForm({ ...form, disabled: data.checked })
                        }} />
                    <Form.Checkbox name={"startActive"} label='Start Active'
                        checked={form.startActive} onChange={(e, data) => {
                            setForm({ ...form, startActive: data.checked })
                        }} />
                    <Form.Checkbox name={"ignoreCommanderWares"} label='Ignnore Commander Wares'
                        checked={form.ignoreCommanderWares} onChange={(e, data) => {
                            setForm({ ...form, ignoreCommanderWares: data.checked })
                        }} />
                </Form.Group>
                <Form.Group widths={16} style={{ display: "contents" }} >
                    <Form.TextArea placeholder='More information ...'
                        value={form.description} onChange={e => {
                            setForm({ ...form, description: e.target.value })
                        }} />
                </Form.Group>
            </Segment>
            <Segment>
                <Form.Group widths={"equal"}>
                    <Form.Dropdown label={'Faction'} placeholder='Faction' search selection options={JobService.getFactionOptions()} value={form.category !== undefined ? form.category.faction : ""}
                        onChange={(e, obj) => {
                            setForm({ ...form, category: { ...form.category, faction: obj.value } })
                        }} />
                    <Form.Dropdown label={'Size'} placeholder='Size' search selection options={JobService.getSizeOptions()} value={form.category !== undefined ? form.category.size : ""}
                        onChange={(e, obj) => {
                            setForm({ ...form, category: { ...form.category, size: obj.value } })
                        }} />
                    <Form.Input name={"tags"} label={"Tags"} value={form.category !== undefined ? form.category.tags : ""} onChange={e => {
                        setForm({ ...form, category: { ...form.category, tags: e.target.value } })
                    }} />
                </Form.Group>
            </Segment>
            <Segment>
                <Form.Group widths={"equal"}>
                    <Form.Checkbox name={"buildatshipyard"} label='Build at shipyard'
                        checked={form.environment !== undefined ? form.environment.buildatshipyard : false} onChange={(e, data) => {
                            setForm({ ...form, environment: { ...form.environment, buildatshipyard: data.checked } })
                        }} />
                    <Form.Checkbox name={"gate"} label='Gate'
                        checked={form.environment !== undefined ? form.environment.gate : false} onChange={(e, data) => {
                            setForm({ ...form, environment: { ...form.environment, gate: data.checked } })
                        }} />
                </Form.Group>
            </Segment>
            <Segment>
                <Form.Group widths={"equal"}>
                    <Form.Checkbox name={"commandeerable"} label='Comandeerable'
                        checked={form.modifiers !== undefined ? form.modifiers.commandeerable : false} onChange={(e, data) => {
                            setForm({ ...form, modifiers: { ...form.modifiers, commandeerable: data.checked } })
                        }} />
                    <Form.Checkbox name={"rebuild"} label='Rebuild'
                        checked={form.modifiers !== undefined ? form.modifiers.rebuild : false} onChange={(e, data) => {
                            setForm({ ...form, modifiers: { ...form.modifiers, rebuild: data.checked } })
                        }} />
                    <Form.Checkbox name={"subordinate"} label='Subordinate'
                        checked={form.modifiers !== undefined ? form.modifiers.subordinate : false} onChange={(e, data) => {
                            setForm({ ...form, modifiers: { ...form.modifiers, subordinate: data.checked } })
                        }} />
                </Form.Group>
            </Segment>
            <Segment>
                <Form.Group widths={"equal"}>
                    <Form.Input name={"minexpiration"} label={"Minimum Expiration"} value={form.expirationTime !== undefined ? form.expirationTime.min : ""} onChange={e => {
                        setForm({ ...form, expirationTime: { ...form.expirationTime, min: e.target.value } })
                    }} />
                    <Form.Input name={"maxexpiration"} label={"Maximum Expiration"} value={form.expirationTime !== undefined ? form.expirationTime.max : ""} onChange={e => {
                        setForm({ ...form, expirationTime: { ...form.expirationTime, max: e.target.value } })
                    }} />
                    <Form.Input name={"startAt"} label={"Start At"} value={form.time !== undefined ? form.time.start : ""} onChange={e => {
                        setForm({ ...form, time: { ...form.time, start: e.target.value } })
                    }} />
                    <Form.Input name={"interval"} label={"Interval"} value={form.time !== undefined ? form.time.interval : ""} onChange={e => {
                        setForm({ ...form, time: { ...form.time, interval: e.target.value } })
                    }} />
                </Form.Group>
            </Segment>
        </Fragment>
    )
}

export default BasicInformationTab