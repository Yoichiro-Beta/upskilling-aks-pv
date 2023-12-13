# upskilling-aks-pv
This is a public copy of a private gitlab repository. 
Please copy this repo's content to a gitlab repo.

## Important:
set the Azure ContainerRepository in the yalms/deployment.yaml file to your own.
This one is set to a dummy repo.

## Setting up the "aks-agent"
- Create the file .gitlab/agents/aks-agent/config.yaml (set the aks-agent to anything you like... it's just a name)
- ```
ci_access:
  project:
  - yourGitLabUser/yourGitLabProject
```
