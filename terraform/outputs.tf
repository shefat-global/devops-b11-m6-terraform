# VPC
output "vpc_id" {
  value = module.vpc.vpc_id
}

output "public_subnet_ids" {
  value = module.vpc.public_subnet_ids
}

output "private_subnet_ids" {
  value = module.vpc.private_subnet_ids
}

# EC2 Instances
output "frontend_public_ip" {
  value = module.ec2.frontend_public_ip
}

output "backend_private_ip" {
  value = module.ec2.backend_private_ip
}

output "bastion_public_ip" {
  value = module.ec2.bastion_public_ip
}

# Database EC2
output "db_private_ip" {
  value = module.database.db_private_ip
}