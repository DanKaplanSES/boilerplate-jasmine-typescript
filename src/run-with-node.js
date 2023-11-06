(async function () { return Promise.reject(new Error()); })().catch((onrejected) => {
    console.log(onrejected)
})