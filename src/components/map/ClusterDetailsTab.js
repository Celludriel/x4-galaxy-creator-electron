import { Fragment } from "react";
import { Form } from "semantic-ui-react";

function ClusterDetailsTab({ form, setForm }) {

    const backdropOptions = [
        {
            key: 'empty_space',
            text: 'Empty space',
            value: 'empty_space',
        }
    ]

    return (
        <Fragment>
            <Form.Group widths={"equal"}>
                <Form.Input disabled={true} name={"id"} label={"Id"} value={form.id} onChange={e => {
                    setForm({ ...form, id: e.target.value })}}/>
                <Form.Input name={"x"} label={"X"} value={form.x} onChange={e => {
                    setForm({ ...form, x: e.target.value })}} />
                <Form.Input name={"y"} label={"Y"} value={form.y} onChange={e => {
                    setForm({ ...form, y: e.target.value })}} />
            </Form.Group>
            <Form.Input name={"name"} label={"Name"} value={form.name} onChange={e => {
                    setForm({ ...form, name: e.target.value })}} />
            <Form.TextArea label={"Description"} placeholder='More information ...'
                value={form.description} onChange={e => {
                    setForm({ ...form, description: e.target.value })}} />
            <Form.Group widths={"equal"}>
                <Form.Input name={"music"} label={"Music"} value={form.music} onChange={e => {
                    setForm({ ...form, music: e.target.value })}}  />
                <Form.Input name={"sunlight"} label={"Sunlight"} value={form.sunlight}  onChange={e => {
                    setForm({ ...form, sunlight: e.target.value })}} />
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Input name={"economy"} label={"Economy"} value={form.economy} onChange={e => {
                    setForm({ ...form, economy: e.target.value })}} />
                <Form.Input name={"security"} label={"Security"} value={form.security} onChange={e => {
                    setForm({ ...form, security: e.target.value })}}  />
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Dropdown label={"Backdrop"} placeholder='Backdrop' search selection options={backdropOptions}
                    value={form.backdrop} onChange={e => {
                        setForm({ ...form, backdrop: e.target.value })}}  />
                <Form.Checkbox name={"noBelts"} label='Disable belts'
                    checked={form.noBelts} onChange={(e,data) => {
                        setForm({ ...form, noBelts: data.checked })}} />    
            </Form.Group>
        </Fragment>
    )
}

export default ClusterDetailsTab