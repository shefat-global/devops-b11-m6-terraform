# VPC Module
module "vpc" {
  source          = "./modules/vpc"
  vpc_cidr        = var.vpc_cidr
  public_subnets  = var.public_subnets
  private_subnets = var.private_subnets
}

# Security Groups Module
module "security_groups" {
  source = "./modules/security-groups"
  vpc_id = module.vpc.vpc_id
  my_ip_cidr = var.my_ip_cidr
}

# EC2 Module (frontend + backend)
module "ec2" {
  source          = "./modules/ec2"
  public_subnets  = module.vpc.public_subnet_ids
  private_subnets = module.vpc.private_subnet_ids
  sg_ids          = module.security_groups.sg_ids
  frontend_type   = var.frontend_instance_type
  backend_type    = var.backend_instance_type
  bastion_type    = var.bastion_instance_type
  ami_id          = var.ami_id
  key_name               = var.key_name
}

# Database EC2 Module (private MySQL instance)
module "database" {
  source           = "./modules/database"
  subnet_id        = module.vpc.private_subnet_ids[0]
  sg_id            = module.security_groups.db_sg_id
  db_instance_type = var.db_instance_type
  ami_id           = var.ami_id
  key_name               = var.key_name
}