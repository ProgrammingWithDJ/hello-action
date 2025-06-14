const core = require('@actions/core');

try {

    const name= core.getInput('name');
    console.log(`Hello ${name}!`);
}
catch (error) {
    // Set the action as failed
    core.setFailed(error.message);
}