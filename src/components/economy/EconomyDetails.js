import { useState } from "react"
import { Form, Segment } from "semantic-ui-react"
import ProductSpawnLocations from './ProductSpawnLocations';
import ProductWares from "./ProductWares";
import GalaxyService from './../../service/galaxyservice';

function EconomyDetails({ product, saveProduct, setEditorState }) {

    const [dirty, setDirty] = useState(false)
    const [form, setForm] = useState(product)

    const formUpdate = (form) => {
        setForm(form)
        setDirty(true)
    }

    return (
        <Form>
            <Form.Group widths={"equal"}>
                <Form.Input name={"id"} label={"Id"} value={form.id} disabled={true} />
                <Form.Dropdown label={"Ware"} placeholder='Ware' search selection options={GalaxyService.getWareOptions()} value={form.ware}
                                onChange={(e,obj) => {
                                    formUpdate({ ...form, ware: obj.value })
                                }} />        
                <Form.Dropdown label={"Race"} placeholder='Race' search selection options={GalaxyService.getRaceOptions()} value={form.race}
                                onChange={(e,obj) => {
                                    formUpdate({ ...form, race: obj.value })
                                }} />   
                <Form.Dropdown label={"Owner"} placeholder='Owner' search selection options={GalaxyService.getFactionOptions()} value={form.owner}
                                onChange={(e,obj) => {
                                    formUpdate({ ...form, owner: obj.value })
                                }} />
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Input name={"galaxyQuota"} label={"Galaxy"} value={form.galaxyQuota} onChange={e => {
                    formUpdate({ ...form, galaxyQuota: e.target.value })
                }} />
                <Form.Input name={"clusterQuota"} label={"Cluster"} value={form.clusterQuota} onChange={e => {
                    formUpdate({ ...form, clusterQuota: e.target.value })
                }} />
                <Form.Input name={"sectorQuota"} label={"Sector"} value={form.sectorQuota} onChange={e => {
                    formUpdate({ ...form, sectorQuota: e.target.value })
                }} />
                <Form.Input name={"zoneQuota"} label={"Zone"} value={form.zoneQuota} onChange={e => {
                    formUpdate({ ...form, zoneQuota: e.target.value })
                }} />
            </Form.Group>
            <Segment>
                <Form.Group widths={"equal"}>
                    <Form.Input name={"securityMin"} label={"Security Minimum"} value={form.locationInfo.securityMin} onChange={e => {
                        formUpdate({ ...form, locationInfo: { ...form.locationInfo, securityMin: e.target.value } })
                    }} />
                    <Form.Input name={"economyMax"} label={"Economy Maximum"} value={form.locationInfo.economyMax} onChange={e => {
                        formUpdate({ ...form, locationInfo: { ...form.locationInfo, economyMax: e.target.value } })
                    }} />
                    <Form.Input name={"sunlightMin"} label={"Sunlight Minimum"} value={form.locationInfo.sunlightMin} onChange={e => {
                        formUpdate({ ...form, locationInfo: { ...form.locationInfo, sunlightMin: e.target.value } })
                    }} />
                    <Form.Input name={"sunlightMax"} label={"Sunlight Maximum"} value={form.locationInfo.sunlightMax} onChange={e => {
                        formUpdate({ ...form, locationInfo: { ...form.locationInfo, sunlightMax: e.target.value } })
                    }} />
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Checkbox name={"addDoubleTravelSpeed"} label='Max Bound'
                        checked={form.locationInfo["maxBound"]} onChange={(e, data) => {
                            formUpdate({ ...form, locationInfo: { ...form.locationInfo, maxBound: e.target.value } })
                        }} />
                    <Form.Checkbox name={"solitary"} label='Solitary'
                        checked={form.locationInfo["solitary"]} onChange={(e, data) => {
                            formUpdate({ ...form, locationInfo: { ...form.locationInfo, solitary: e.target.value } })
                        }} />
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Field>
                        <ProductSpawnLocations form={form} setForm={formUpdate} />
                    </Form.Field>
                    <Form.Field>
                        <ProductWares form={form} setForm={formUpdate} />
                    </Form.Field>
                </Form.Group>
            </Segment>
            <Form.Group widths={"equal"}>
                <Form.Button secondary onClick={() => setEditorState("MASTER")}>Cancel</Form.Button>
                <Form.Button primary disabled={!dirty} onClick={() => saveProduct(form)}>Save Product</Form.Button>
            </Form.Group>
        </Form>
    )
}

export default EconomyDetails