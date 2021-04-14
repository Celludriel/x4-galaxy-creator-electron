import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from '../../actions/index';
import { v4 as uuidv4 } from 'uuid';
import JobMaster from './JobMaster';
import JobDetails from './JobDetails';

function JobEditor() {
    const dispatch = useDispatch()
    const galaxy = useSelector(state => state.galaxyReducer.galaxy);
    const [editorState, setEditorState] = useState("MASTER")
    const [selectedJob, setSelectedJob] = useState()

    const selectJob = (job) => {
        setSelectedJob(job)
        setEditorState("DETAILS")
    }

    const prepareNewJob = () => {
        setSelectedJob({
            "id": "",
            "name": "",
            "basket": "",
            "category": {
                "faction": "",
                "tags": "",
                "size": ""
            },
            "order": {
                "params": {
                    "minsell": "",
                    "maxsell": "",
                    "maxbuy": "",
                    "minbuy": ""
                },
                "defaultOrder": true,
                "order": ""
            },
            "quota": {
                "galaxy": 0,
                "cluster": 0
            },
            "location": {
                "macro": "",
                "clazz": "",
                "relation": "",
                "comparison": "",
                "faction": ""
            },
            "environment": {
                "buildatshipyard": true
            },
            "modifiers": {
                "commandeerable": true,
                "rebuild": false
            },
            "ship": {
                "select": {
                    "faction": "",
                    "size": "",
                    "tags": ""
                },
                "loadout": {
                    "level": {
                        "max": 0.0,
                        "min": 0.0
                    }
                },
                "owner": {
                    "exact": "",
                    "overridenpc": true
                }
            }
        })
        setEditorState("DETAILS")
    }

    const saveJob = (job) => {
        if (job.editorId !== undefined) {
            dispatch(allActions.jobActions.saveJob(job))
            setEditorState("MASTER")
        } else {
            job.editorId = uuidv4()
            dispatch(allActions.jobActions.saveNewJob(job))
            setEditorState("MASTER")
        }
    }

    const removeJob = (job) => {
        dispatch(allActions.jobActions.removeJob(job))
    }

    return (
        <Fragment>
            {
                editorState === "MASTER" &&
                <JobMaster jobs={galaxy.jobs} selectJob={selectJob} prepareNewJob={prepareNewJob} removeJob={removeJob} />
            }
            {
                editorState === "DETAILS" &&
                <JobDetails job={selectedJob} saveJob={saveJob} setEditorState={setEditorState} />
            }
        </Fragment>
    )
}

export default JobEditor