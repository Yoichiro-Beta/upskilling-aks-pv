# upskilling-aks-pv
This is a public copy of a private gitlab repository. 
Please copy this repo's content to a gitlab repo.

## Important:
set the Azure ContainerRepository in the yalms/deployment.yaml file to your own.
This one is set to a dummy repo.

## Setting up the "aks-agent"
- Create the file .gitlab/agents/aks-agent/config.yaml (set the aks-agent to anything you like... it's just a name)
- Edit the config.yaml
```
ci_access:
  project:
  - yourGitLabUser/yourGitLabProject
```
- Next go to gitlab's *Operate* -> *Kubernetes Cluster* and press "Connect a Cluster"
- Select the aks-agent from the dropdown and press "Register"
- Run the helm chart commands displayed from your command line
Now you should be set that gitlab can access your Azure Kubernetes Cluster. 
