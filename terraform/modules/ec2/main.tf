# Frontend EC2
resource "aws_instance" "frontend" {
  ami                    = var.ami_id
  instance_type          = var.frontend_type
  subnet_id              = element(var.public_subnets, 0)
  vpc_security_group_ids = [var.sg_ids[0]] # Frontend SG
  key_name               = var.key_name

  tags = { Name = "frontend-ec2" }
}

# Backend EC2
resource "aws_instance" "backend" {
  ami                    = var.ami_id
  instance_type          = var.backend_type
  subnet_id              = element(var.private_subnets, 0)
  vpc_security_group_ids = [var.sg_ids[1]] # Backend SG
  key_name               = var.key_name

  tags = { Name = "backend-ec2" }
}

# Bastion Host EC2
resource "aws_instance" "bastion" {
  ami                    = var.ami_id
  instance_type          = var.bastion_type
  subnet_id              = element(var.public_subnets, 0)
  vpc_security_group_ids = [var.sg_ids[2]] # Bastion SG
  key_name               = var.key_name

  tags = { Name = "bastion-ec2" }
}