data "aws_availability_zones" "available" {
  state = "available"
}

locals {
  azs = slice(data.aws_availability_zones.available.names, 0, var.az_count)

  # Public:  x.x.0.0/24, x.x.1.0/24, ...
  public_subnets = [for i in range(var.public_subnet_count) : cidrsubnet(var.vpc_cidr, 8, i)]

  # Private: x.x.10.0/24, x.x.11.0/24, ...
  private_subnets = [for i in range(var.private_subnet_count) : cidrsubnet(var.vpc_cidr, 8, i + 10)]
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"

  name = "${var.name}-vpc"
  cidr = var.vpc_cidr

  azs             = local.azs
  public_subnets  = local.public_subnets
  private_subnets = local.private_subnets # assigned to AZs round-robin

  enable_nat_gateway   = var.enable_nat_gateway
  single_nat_gateway   = var.single_nat_gateway
  enable_dns_hostnames = true
  enable_dns_support   = true

  public_subnet_tags  = { Tier = "public" }
  private_subnet_tags = { Tier = "private" }
}
