variable "region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "project" {
  description = "Project / environment name used as a prefix"
  type        = string
  default     = "demo"
}

variable "tags" {
  description = "Tags applied to all resources"
  type        = map(string)
  default     = { ManagedBy = "terraform" }
}

# ---- VPC ----
variable "vpc_cidr" {
  type    = string
  default = "10.0.0.0/16"
}

variable "az_count" {
  type    = number
  default = 2
}

variable "public_subnet_count" {
  type    = number
  default = 2
}

variable "private_subnet_count" {
  type    = number
  default = 4
}

variable "enable_nat_gateway" {
  type    = bool
  default = true
}

variable "single_nat_gateway" {
  description = "true = one shared NAT (cheaper); false = one per AZ (HA)"
  type        = bool
  default     = true
}
