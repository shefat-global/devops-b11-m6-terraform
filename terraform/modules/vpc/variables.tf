# VPC CIDR
variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
}

# Public subnet CIDRs
variable "public_subnets" {
  description = "List of public subnet CIDRs"
  type        = list(string)
}

# Private subnet CIDRs
variable "private_subnets" {
  description = "List of private subnet CIDRs"
  type        = list(string)
}