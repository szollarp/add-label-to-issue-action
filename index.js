const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");
const { createActionAuth } = require("@octokit/auth-action");

async function run() {
  try {
    const auth = createActionAuth();
    const { token } = await auth();

    const appOctokit = new Octokit({
      auth: token
    });

  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()