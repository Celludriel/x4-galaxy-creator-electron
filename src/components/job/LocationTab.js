import { Fragment } from "react"
import { Form, Segment } from "semantic-ui-react"
import JobService from './../../service/jobservice';

function LocationTab({ form, setForm }) {

    const rowAlignCenter = {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end"
    };

    return (
        <Fragment>
            <Segment>
                <Form.Group widths={"equal"}>
                    <Form.Input name={"sunlightmin"} label={"Min Sunlight"} value={form.location !== undefined
                        && form.location.sunlight !== undefined ? form.location.sunlight.min : ""} onChange={e => {
                            setForm({
                                ...form, location: {
                                    ...form.location, sunlight: {
                                        ...form.location.sunlight, min: e.target.value
                                    }
                                }
                            })
                        }} />
                    <Form.Input name={"sunlightmax"} label={"Max Sunlight"} value={form.location !== undefined
                        && form.location.sunlight !== undefined ? form.location.sunlight.max : ""} onChange={e => {
                            setForm({
                                ...form, location: {
                                    ...form.location, sunlight: {
                                        ...form.location.sunlight, max: e.target.value
                                    }
                                }
                            })
                        }} />
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Input name={"macro"} label={"Macro"} value={form.location !== undefined ? form.location.macro : ""} onChange={e => {
                        setForm({ ...form, location: { ...form.location, macro: e.target.value } })
                    }} />
                    <Form.Input name={"clazz"} label={"Class"} value={form.location !== undefined ? form.location.clazz : ""} onChange={e => {
                        setForm({ ...form, location: { ...form.location, clazz: e.target.value } })
                    }} />
                    <Form.Dropdown label={'Region basket'} placeholder='Basket' search selection options={JobService.getBasketOptions()}
                        value={form.location !== undefined ? form.location.basket : ""} onChange={(e, obj) => {
                            setForm({ ...form, location: { ...form.lcoation, regionbasket: obj.value } })
                        }}
                    />
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Input name={"faction"} label={"Faction"} value={form.location !== undefined ? form.location.faction : ""} onChange={e => {
                        setForm({ ...form, location: { ...form.location, faction: e.target.value } })
                    }} />
                    <Form.Dropdown label={'Comparison'} placeholder='Comparison' search selection options={JobService.getComparisonOptions()}
                        value={form.location !== undefined ? form.location.comparison : ""} onChange={(e, obj) => {
                            setForm({ ...form, location: { ...form.lcoation, comparison: obj.value } })
                        }}
                    />
                    <Form.Dropdown label={'Relation'} placeholder='Relation' search selection options={JobService.getRelationOptions()}
                        value={form.location !== undefined ? form.location.relation : ""} onChange={(e, obj) => {
                            setForm({ ...form, location: { ...form.lcoation, relation: obj.value } })
                        }}
                    />
                </Form.Group>
                <Form.Group widths={"equal"} style={rowAlignCenter}>
                    <Form.Dropdown label={'Faction Race'} placeholder='Faction' search selection options={JobService.getFactionRaceOptions()}
                        value={form.location !== undefined ? form.location.factionRace : ""} onChange={(e, obj) => {
                            setForm({ ...form, location: { ...form.lcoation, factionRace: obj.value } })
                        }}
                    />
                    <Form.Dropdown label={'Police Faction Race'} placeholder='Faction' search selection options={JobService.getFactionRaceOptions()}
                        value={form.location !== undefined ? form.location.policeFaction : ""} onChange={(e, obj) => {
                            setForm({ ...form, location: { ...form.lcoation, policeFaction: obj.value } })
                        }}
                    />
                    <Form.Checkbox name={"negateFactionRace"} label='Negate Faction Race'
                        checked={form.location !== undefined ? form.location.negateFactionRace : false} onChange={(e, data) => {
                            setForm({ ...form, location: { ...form.location, negateFactionRace: data.checked } })
                        }} />
                    <Form.Checkbox name={"matchExtension"} label='Match Extension'
                        checked={form.location !== undefined ? form.location.matchExtension : false} onChange={(e, data) => {
                            setForm({ ...form, location: { ...form.location, matchExtension: data.checked } })
                        }} />
                </Form.Group>
            </Segment>
        </Fragment>
    )
}

export default LocationTab