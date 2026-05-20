# AWS Access  
variable "aws_access_key" {
  description = "AWS Access Key"
  type        = string
}

variable "aws_secret_key" {
  description = "AWS Secret Key"
  type        = string
  sensitive   = true
}

# AWS
variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

# VPC
variable "vpc_cidr" {
  description = "VPC CIDR block"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnets" {
  description = "List of public subnet CIDRs"
  type        = list(string)
  default     = ["10.0.1.0/24"]
}

variable "private_subnets" {
  description = "List of private subnet CIDRs"
  type        = list(string)
  default     = ["10.0.2.0/24", "10.0.3.0/24"]
}

# EC2 Instances
variable "frontend_instance_type" {
  description = "Frontend EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "backend_instance_type" {
  description = "Backend EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "bastion_instance_type" {
  description = "Bastion EC2 instance type"
  type        = string
  default     = "t3.micro"
}

# Database EC2
variable "db_instance_type" {
  description = "Database EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "ami_id" {
  description = "Ubuntu AMI ID for EC2 instances"
  type        = string
  default     = "ami-0c02fb55956c7d316"  # Ubuntu 24.04 example
}

variable "my_ip_cidr" {
  description = "Your public IP in CIDR format for bastion SSH access"
  type        = string
}

variable "key_name" {
  description = "AWS key pair name for SSH access"
  type        = string
}