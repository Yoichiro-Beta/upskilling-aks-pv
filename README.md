# upskilling-aks-pv
This is a public copy of a private gitlab repository. 
Please copy this repo's content to a gitlab repo.

## Important:
set the Azure ContainerRepository in the yalms/deployment.yaml file to your own.
This one is set to a dummy repo.

## Setting up your Azure Cluster and the Azure ContainerRepository
- Create the cluster
```
az aks create -g myResourceGroup -n myAKSCluster --enable-managed-identity --node-count 1 --enable-addons monitoring --enable-msi-auth-for-monitoring  --generate-ssh-keys
```
- Next create a ContaienrRegistry on the Azure Portal.
- In your registry, create a Token and generate a user & password. Use this user and Token in your gitlab Pipeline

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
