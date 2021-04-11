const saveJob = (job) => {
    return {
        type: "UPDATE_JOB",
        data: job
    }
}

const saveNewJob = (job) => {
    return {
        type: "ADD_JOB",
        data: job
    }
}

export default { saveJob, saveNewJob }