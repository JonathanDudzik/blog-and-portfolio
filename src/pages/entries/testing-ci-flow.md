---
title: "Automated CI Testing"
date: "06.25.2021"
---

Before getting into the technical stuff, I want to mention a foundational concept I had to learn about CI/CD: 

**It may not always include the actual deployment of code**.

This fact may seem obvious, but I had initially thought that CI/CD (Continuous Integration, Continuous Delivery and/or Deployment) are always done together: you can’t have one without the other. However, that is simply not true. I now believe the opposite is true: Many dev shops can do CI, but few probably actually do true CD. 

Here is an article to get you started down a rabbit hole about defining [what CI/CD is](https://www.redhat.com/en/topics/devops/what-is-ci-cd). However, my own working definition is that *CI tests and provides the results of each test in the pull request, so you can see whether the change in your branch introduces an error. When all CI tests in a workflow pass, the changes you pushed are ready to be reviewed by a team member or merged.* When a test fails, one of your changes may have caused the failure.

## Using Gatsby with a CI Pipeline
Gatsby is a great platform for running such automated CI tests of code before deploying it! Here are a couple things to be aware of concerning Gatsby’s build and deploy pipeline:
Gatsby Production builds are triggered when there is a commit to the production branch
- Gatsby Pull Request builds are similar to Production builds but are used to see effects of code changes
- Pull Request builds can be used to run pre-production tests on a http server (compared to just localhost)

## Two possible CI workflows to consider
Here is one possible CI workflow which tests code changes when a commit is pushed to the remote GitHub repository:
1. Make local changes
2. Push changes to Github
3. Test here with github actions on localhost or git pages
4. Make a PR to production branch (Gatsby PR build triggered)
5. It would be great to run your tests here on the preview channel
6. Merge changes into production branch (Gatsby Production build triggered)

Here is yet another possible workflow that might be used for a larger team with a Lead that is the gatekeeper for PRs to master:
1. Dev will push branch to GitHub
2. Dev will create a PR to a "staging" branch
3. Dev will request a code review
3. Lead will merge PR
3. Code is auto deployed to a staging site
3. Auto run tests on staging site at regular intervals (using a sleep task can be useful here)
3. When all tests pass, Lead will create and merge a PR to development branch to master branch
3. Code is auto deployed to Production server

## Choosing a CI Tool
There are a few popular options if you want to do CI/CD. There is Jenkins, Travis CI, Circle CI, and GitHub Actions:
- Jenkins seems to do a little more than other tools and is a well establish staple in the development world.
- I like Travis CI, but was reluctant to use it because they were bought by a private firm, engineers were let go, and they changed their pricing policy.
- Circle CI looks like a great CI/CD tool, but at the time of writing this post, I could not see a free plan that would work for my purposes. 
- GitHub Actions is (IMO) the next big contender in the CI/CD world. It is already being applied in many Microsoft products.

I started learning the basics of CI/CD with GitHub Actions by using GitHub [Lab](https://lab.github.com/).

## Implementing CI Testing with GitHub Actions
There are more detailed explinations for each of these steps found in GitHub Lab about [GitHub Actions](https://lab.github.com/githubtraining/github-actions:-writing-javascript-actions)

**Step 1**:
Create your Action inside a folder whose name will define your Action and whose contents will be your Action
Create a Docker image that does whatever it is you want your action to accomplish
Add a script that the Docker file will use
Add Action metadata in the form of a YAML script

**Step 2**:
Create a GitHub workflow that uses the github action
GitHub workflows are .yml files placed in the .github/workflows directory
Each workflow has a map which provides basic workflow info
Each workflow will contain one or more action blocks
Action blocks piece together jobs which actually run an Action

**Step 2.1**:
Create your workflow name and event using a YAML map
Give your workflow a name with the “name:” key
Give your workflow an event to fire on with the “on:” key

**Step 2.2**:
Create your action block map
jobs: is the base component of a workflow run
build: is the identifier we're attaching to this job
name: is the name of the job, this is displayed on GitHub when the workflow is running
runs-on: defines the type of machine to run the job on. The machine can be either a GitHub-hosted runner or a self-hosted runner.
steps: the linear sequence of operations that make up a job: A step represents one effect of the automation. A step could be defined as a GitHub Action, or another unit, like printing something to the console.
uses: actions/checkout@v1 uses a community action called checkout to allow the workflow to access the contents of the repository
uses: ./action-a provides the relative path to the action we created in the action-a directory of the repository
with: is used to specify the input variables that will be available to your action in the runtime environment.


The above step give you a solid foundation for creating your first GitHub Action. Additionally, this is what my Dockerfile looks like:
```
. FROM debian:9.5-slim
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
```

## Some Good practices outside of automated testing:
- Setup automated Code review checks that will pass only when code have passed enough reviews.
- Protect your main branches from accidental merges by requiring certain checks (a number of code reviews, for example) to pass.
- Use a GitHub branch label to specify when a job should be run.
- Remember that even fully automated deployments should go through code review checks.
- You should be testing the branches when PRs are created, but never on the master branch - this is evidenced by the fact that cloud services often auto deploy to production when PRs are merged into the master branch, and by the fact that GitHub advocates protecting master branches until all tests and reviews are complete.