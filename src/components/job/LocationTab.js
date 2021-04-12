import { Fragment } from "react"
import { Form, Segment } from "semantic-ui-react"

function LocationTab({ form, setForm }) {

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
            </Segment>
        </Fragment>
    )
}

export default LocationTab