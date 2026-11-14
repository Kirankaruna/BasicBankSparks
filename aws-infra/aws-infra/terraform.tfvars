region               = "ap-south-1"
project              = "demo"
vpc_cidr             = "10.0.0.0/16"
az_count             = 2
public_subnet_count  = 2
private_subnet_count = 4
single_nat_gateway   = false   # false = 1 NAT + 1 private route table per AZ (2 private RTs); true = 1 shared
