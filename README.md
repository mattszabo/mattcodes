# mattcodes

Written with [Sapper](https://github.com/sveltejs/sapper)


## Getting started
### Running the project

Once you have created the project, install dependencies and run the project in development mode:

```bash
cd my-app
npm install # or yarn
npm run dev
```

This will start the development server on [localhost:3000](http://localhost:3000). Open it and click around.

## Terraform

Infrastructure is represented as code with Terraform as the tool to deploy it.

All `terraform` commands are required to be run from the mattcodes/terraform directory

### Workspaces

This project uses Terraform workspaces: `dev` and `prod`. Workspaces are tied the corresponing dev and prod AWS accounts.

To run a `terraform` command against a specific workspace you'll need to:

```bash
# example for dev deployment
terraform workspace select dev
terraform apply -var-file=dev.tfvars
```

Workspace config exists in the `dev.tfvars` and `prod.tfvars` files.

Note: AWS profiles need to be set in the corresponding dev and prod tfvars files before running a deployment or plan.
