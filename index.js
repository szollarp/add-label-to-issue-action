const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('token');
    const issueNumber = core.getInput('issueNumber');
    const labels = core.getInput('labels');
    
    const {context, getOctokit} = github;
    const octokit = getOctokit(token);

    await octokit.issues.addLabels({
      ...context.repo,
      issue_number: issueNumber,
      labels
    });
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();