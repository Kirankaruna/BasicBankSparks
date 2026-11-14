############################
# Network
############################
module "vpc" {
  source = "./modules/vpc"

  name                 = var.project
  vpc_cidr             = var.vpc_cidr
  az_count             = var.az_count
  public_subnet_count  = var.public_subnet_count
  private_subnet_count = var.private_subnet_count
  enable_nat_gateway   = var.enable_nat_gateway
  single_nat_gateway   = var.single_nat_gateway
}

############################
# Add more below when needed
############################

# module "alb" {
#   source  = "terraform-aws-modules/alb/aws"
#   version = "~> 9.0"
#
#   name    = "${var.project}-alb"
#   vpc_id  = module.vpc.vpc_id
#   subnets = module.vpc.public_subnet_ids
#   ...
# }

# module "asg" {
#   source  = "terraform-aws-modules/autoscaling/aws"
#   version = "~> 7.0"
#
#   name                = "${var.project}-asg"
#   vpc_zone_identifier = module.vpc.private_subnet_ids
#   ...
# }
