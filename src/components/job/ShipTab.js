import { Fragment } from "react"
import { Form, Segment } from "semantic-ui-react"
import JobService from "../../service/jobservice"

function ShipTab({ form, setForm }) {

    const rowAlignCenter = {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end"
    };

    return (
        <Fragment>
            <Segment>
                <Form.Group widths={"equal"}>
                    <Form.Input name={"faction"} label={"Faction"} value={form.ship !== undefined
                        && form.ship.select !== undefined ? form.ship.select.faction : ""} onChange={e => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, select: {
                                        ...form.ship.select, faction: e.target.value
                                    }
                                }
                            })
                        }} />
                    <Form.Input name={"tags"} label={"Tags"} value={form.ship !== undefined
                        && form.ship.select !== undefined ? form.ship.select.tags : ""} onChange={e => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, select: {
                                        ...form.ship.select, tags: e.target.value
                                    }
                                }
                            })
                        }} />
                    <Form.Dropdown label={'Size'} placeholder='Size' search selection options={JobService.getSizeOptions()} value={form.category !== undefined ? form.category.size : ""}
                        onChange={(e, obj) => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, size: {
                                        ...form.ship.size, faction: obj.value
                                    }
                                }
                            })
                        }} />
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Input name={"minLoadout"} label={"Min Loadout"} value={form.location !== undefined
                        && form.location.loadout !== undefined
                        && form.location.loadout.select !== undefined ? form.location.loadout.select.min : ""} onChange={e => {
                            setForm({
                                ...form, location: {
                                    ...form.location, loadout: {
                                        ...form.location.loadout, select: {
                                            ...form.location.loadout.select, min: e.target.value
                                        }
                                    }
                                }
                            })
                        }} />
                    <Form.Input name={"maxLoadout"} label={"Max Loadout"} value={form.location !== undefined
                        && form.location.loadout !== undefined
                        && form.location.loadout.select !== undefined ? form.location.loadout.select.max : ""} onChange={e => {
                            setForm({
                                ...form, location: {
                                    ...form.location, loadout: {
                                        ...form.location.loadout, select: {
                                            ...form.location.loadout.select, max: e.target.value
                                        }
                                    }
                                }
                            })
                        }} />
                    <Form.Input name={"exactLoadout"} label={"Exact Loadout"} value={form.location !== undefined
                        && form.location.loadout !== undefined
                        && form.location.loadout.select !== undefined ? form.location.loadout.select.exact : ""} onChange={e => {
                            setForm({
                                ...form, location: {
                                    ...form.location, loadout: {
                                        ...form.location.loadout, select: {
                                            ...form.location.loadout.select, exact: e.target.value
                                        }
                                    }
                                }
                            })
                        }} />
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Input name={"category"} label={"Unit Category"} value={form.ship !== undefined
                        && form.ship.unit !== undefined ? form.ship.unit.category : ""} onChange={e => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, unit: {
                                        ...form.ship.unit, category: e.target.value
                                    }
                                }
                            })
                        }} />
                    <Form.Input name={"category"} label={"Unit Minimum"} value={form.ship !== undefined
                        && form.ship.unit !== undefined ? form.ship.unit.min : ""} onChange={e => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, unit: {
                                        ...form.ship.unit, min: e.target.value
                                    }
                                }
                            })
                        }} />
                    <Form.Input name={"category"} label={"Unit Maximum"} value={form.ship !== undefined
                        && form.ship.unit !== undefined ? form.ship.unit.max : ""} onChange={e => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, unit: {
                                        ...form.ship.unit, max: e.target.value
                                    }
                                }
                            })
                        }} />
                </Form.Group>
                <Form.Group widths={"equal"} style={rowAlignCenter}>
                    <Form.Input name={"category"} label={"Unit Category"} value={form.ship !== undefined
                        && form.ship.owner !== undefined ? form.ship.owner.exact : ""} onChange={e => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, owner: {
                                        ...form.ship.owner, exact: e.target.value
                                    }
                                }
                            })
                        }} />
                    <Form.Checkbox name={"buildatshipyard"} label='Build at shipyard'
                        checked={form.ship !== undefined
                            && form.ship.owner !== undefined ? form.ship.owner.overridenpc : false} onChange={(e, data) => {
                                setForm({
                                    ...form, ship: {
                                        ...form.ship, owner: {
                                            ...form.ship.owner, overridenpc: data.checked
                                        }
                                    }
                                })
                            }} />
                </Form.Group>
                <Form.Group widths={"equal"} style={rowAlignCenter}>
                    <Form.Input name={"cargoProfile"} label={"Cargo Profile"} value={form.ship !== undefined
                        && form.ship.cargo !== undefined
                        && form.ship.cargo.fillPercent !== undefined ? form.ship.cargo.fillPercent.profile : ""} onChange={e => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, cargo: {
                                        ...form.ship.cargo, fillPercent: {
                                            ...form.ship.cargo.fillPercent, profile: e.target.value
                                        }
                                    }
                                }
                            })
                        }} />
                    <Form.Input name={"cargoMin"} label={"Cargo Minimum"} value={form.ship !== undefined
                        && form.ship.cargo !== undefined
                        && form.ship.cargo.fillPercent !== undefined ? form.ship.cargo.fillPercent.min : ""} onChange={e => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, cargo: {
                                        ...form.ship.cargo, fillPercent: {
                                            ...form.ship.cargo.fillPercent, min: e.target.value
                                        }
                                    }
                                }
                            })
                        }} />
                    <Form.Input name={"cargoMax"} label={"Cargo Maximum"} value={form.ship !== undefined
                        && form.ship.cargo !== undefined
                        && form.ship.cargo.fillPercent !== undefined ? form.ship.cargo.fillPercent.max : ""} onChange={e => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, cargo: {
                                        ...form.ship.cargo, fillPercent: {
                                            ...form.ship.cargo.fillPercent, max: e.target.value
                                        }
                                    }
                                }
                            })
                        }} />
                    <Form.Checkbox name={"cargoMultiple"} label='Cargo multiple'
                        checked={form.ship !== undefined
                            && form.ship.cargo !== undefined ? form.ship.cargo.multiple : false} onChange={(e, data) => {
                                setForm({
                                    ...form, ship: {
                                        ...form.ship, cargo: {
                                            ...form.ship.cargo, multiple: data.checked
                                        }
                                    }
                                })
                            }} />
                </Form.Group>
                <Form.Group widths={"equal"} style={rowAlignCenter}>
                    <Form.Input name={"pilotMacro"} label={"Pilot Macro"} value={form.ship !== undefined
                        && form.ship.pilot !== undefined ? form.ship.pilot.macro : ""} onChange={e => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, pilot: {
                                        ...form.ship.pilot, macro: e.target.value
                                    }
                                }
                            })
                        }} />
                    <Form.Input name={"pilotExact"} label={"Pilot Exact"} value={form.ship !== undefined
                        && form.ship.pilot !== undefined
                        && form.ship.pilot.page !== undefined ? form.ship.pilot.page.exact : ""} onChange={e => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, pilot: {
                                        ...form.ship.pilot, page: {
                                            ...form.ship.pilot.page, exact: e.target.value
                                        }
                                    }
                                }
                            })
                        }} />
                    <Form.Input name={"pilotComment"} label={"Pilot Comment"} value={form.ship !== undefined
                        && form.ship.pilot !== undefined
                        && form.ship.pilot.page !== undefined ? form.ship.pilot.page.comment : ""} onChange={e => {
                            setForm({
                                ...form, ship: {
                                    ...form.ship, pilot: {
                                        ...form.ship.pilot, page: {
                                            ...form.ship.pilot.page, comment: e.target.value
                                        }
                                    }
                                }
                            })
                        }} />
                </Form.Group>
            </Segment>
        </Fragment>
    )
}

export default ShipTab