# aws-infra

Terraform for AWS infrastructure. Currently provisions: VPC, 2 public subnets, 4 private subnets across 2 AZs.

## Layout
```
aws-infra/
├── main.tf            # calls modules (add ALB / ASG here later)
├── variables.tf
├── outputs.tf
├── providers.tf
├── versions.tf
├── terraform.tfvars   # edit values here
└── modules/
    └── vpc/           # local module wrapping terraform-aws-modules/vpc/aws
```

## Usage
```bash
terraform init
terraform plan
terraform apply
```

## Adding a new component
1. Create `modules/<name>/` (or use a registry module directly in `main.tf`).
2. Call it in `main.tf`, passing `module.vpc.vpc_id`, `module.vpc.public_subnet_ids`, `module.vpc.private_subnet_ids`.
3. Expose new outputs in `outputs.tf`.
