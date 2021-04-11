import { Checkbox, Form, Segment, Label } from "semantic-ui-react"
import { useEffect, useState } from 'react';
import GalaxyService from './../../service/galaxyservice';


function ClusterPlayerStartTab({ form, setForm }) {
    const [playerStartEnabled, setPlayerStartEnabled] = useState(false)

    useEffect(() => {
        if (form.factionStart !== undefined && form.factionStart !== null) {
            setPlayerStartEnabled(true)
        } else {
            setPlayerStartEnabled(false)
        }
    }, [form])

    const togglePlayerStartEnabled = (e, obj) => {
        if (playerStartEnabled) {
            setForm({ ...form, factionStart: null })
            setPlayerStartEnabled(false);
        } else {
            setForm({ ...form, factionStart: {} })
            setPlayerStartEnabled(true);
        }
    }

    return (
        <Segment>
            <Checkbox label="Enable" name="playerStartFormEnabled" checked={playerStartEnabled} onClick={(e, obj) => togglePlayerStartEnabled(obj.checked)} />
            {
                playerStartEnabled && form.factionStart !== undefined && form.factionStart !== null &&
                <Form>
                    <Form.Group>
                        <Form.Input name={"name"} label={"Name"} value={form.factionStart.name} onChange={e => {
                            setForm({ ...form, factionStart: { ...form.factionStart, name: e.target.value } })
                        }} />
                        <Form.Input name={"playername"} label={"Playername"} value={form.factionStart.playerName} onChange={e => {
                            setForm({ ...form, factionStart: { ...form.factionStart, playerName: e.target.value } })
                        }} />
                        <Form.Dropdown placeholder='Faction' label={"Faction"} value={form.factionStart.faction} search selection
                            options={GalaxyService.getFactionOptions()} onChange={(e, obj) => {
                                setForm({ ...form, factionStart: { ...form.factionStart, faction: obj.value } })
                            }} />
                    </Form.Group>
                    <Label>description</Label>
                    <Form.Group widths={16} style={{ display: "contents" }} >
                        <Form.TextArea placeholder='More information ...'
                            value={form.factionStart.description} onChange={e => {
                                setForm({ ...form, factionStart: { ...form.factionStart, description: e.target.value } })
                            }} />
                    </Form.Group>
                </Form>
            }
        </Segment>
    )
}

export default ClusterPlayerStartTab