variable "subnet_id" {
  description = "Private subnet ID where the database EC2 will be launched"
  type        = string
}

variable "sg_id" {
  description = "Security group ID assigned to the database EC2"
  type        = string
}

variable "db_instance_type" {
  description = "EC2 instance type for the database server"
  type        = string
}

variable "ami_id" {
  description = "Ubuntu AMI ID for the database EC2"
  type        = string
  default     = "ami-0c02fb55956c7d316"  # Ubuntu 24.04 example
}

variable "key_name" {
  description = "AWS key pair name for SSH access"
  type        = string
}