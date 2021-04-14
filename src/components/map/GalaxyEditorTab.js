import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import allActions from './../../actions/index';
import { useState } from 'react';

function GalaxyEditorTab() {
    const galaxy = useSelector(state => state.galaxyReducer.galaxy);
    const dispatch = useDispatch()

    const [dirty, setDirty] = useState(false)
    const [form, setForm] = useState({
        "seed": galaxy.seed,
        "galaxyName": galaxy.galaxyName,
        "galaxyPrefix": galaxy.galaxyPrefix,
        "galaxyOptions": {
            "addDoubleTravelSpeed": galaxy.galaxyOptions.addDoubleTravelSpeed
        },
        "description": galaxy.description,
        "author": galaxy.author,
        "version": galaxy.version,
        "date": galaxy.date,
        "save": galaxy.save,
        "minRandomBelts": galaxy.minRandomBelts,
        "maxRandomBelts": galaxy.maxRandomBelts,
    })

    const formUpdate = (form) => {
        setForm(form)
        setDirty(true)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(allActions.galaxyActions.updateGalaxy(form))
        setDirty(false)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group widths={"equal"}>
                <Form.Input name={"seed"} label={"Seed"} value={form.seed} onChange={e => {
                    formUpdate({ ...form, seed: e.target.value })}}/>
                <Form.Input name={"galaxyPrefix"} label={"Galaxy prefix"} value={form.galaxyPrefix} onChange={e => {
                    formUpdate({ ...form, galaxyPrefix: e.target.value })}} />
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Input name={"galaxyName"} label={"Name"} value={form.galaxyName} onChange={e => {
                    formUpdate({ ...form, galaxyName: e.target.value })}} />
                <Form.Input name={"author"} label={"Author"} value={form.author} onChange={e => {
                    formUpdate({ ...form, author: e.target.value })}} />
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Input name={"version"} label={"Version"} value={form.version} onChange={e => {
                    formUpdate({ ...form, version: e.target.value })}} />
                <Form.Input name={"save"} label={"Save"} value={form.save} onChange={e => {
                    formUpdate({ ...form, save: e.target.value })}} />
                <Form.Input name={"date"} label={"Date"} value={form.date} onChange={e => {
                    formUpdate({ ...form, date: e.target.value })}} />
            </Form.Group>
            <Form.TextArea label={"Description"} placeholder='More information ...' value={form.description} onChange={e => {
                formUpdate({ ...form, description: e.target.value })}} />
            <Form.Group widths={"equal"}>
                <Form.Input name={"minRandomBelts"} label={"Minimum random belts"} value={form.minRandomBelts} onChange={e => {
                    formUpdate({ ...form, minRandomBelts: e.target.value })}} />
                <Form.Input name={"maxRandomBelts"} label={"Maximum random belts"} value={form.maxRandomBelts} onChange={e => {
                    formUpdate({ ...form, maxRandomBelts: e.target.value })}} />
            </Form.Group>
            Galaxy Options
            <Form.Group widths={"equal"}>
                <Form.Checkbox name={"addDoubleTravelSpeed"} label='Double travel speed'
                    checked={form.galaxyOptions["addDoubleTravelSpeed"]} onChange={(e,data) => {
                        formUpdate({ ...form, galaxyOptions: {...form.galaxyOptions, addDoubleTravelSpeed: data.checked }})
                    }} />
            </Form.Group>
            <Form.Button primary disabled={!dirty}>Save Galaxy</Form.Button>
        </Form>
    )
}

export default GalaxyEditorTab