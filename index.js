const core = require('@actions/core');
const exec = require('@actions/exec')

async function run() {
    try {
        const serviceAccountKey = core.getInput("SERVICE_ACCOUNT_KEY", {required: true})
        const host = core.getInput('HOST', {required: true})

        let myOutput = '';
        let myError = '';

        const options = {
            silent: true
        }
        options.listeners = {
            stdout: (data) => {
                myOutput += data.toString();
            },
            stderr: (data) => {
                myError += data.toString();
            }
        };

        await exec.exec('docker', ['login', '-u', '_json_key', '-p', serviceAccountKey, 'https://' + host], options)
            .then(() => {console.log(myOutput)})
            .catch(() => {throw {message: myError}})
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()