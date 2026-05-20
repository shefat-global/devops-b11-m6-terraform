variable "public_subnets" {
  type = list(string)
}

variable "private_subnets" {
  type = list(string)
}

variable "frontend_type" {
  type = string
}

variable "backend_type" {
  type = string
}

variable "bastion_type" {
  type = string
}

variable "ami_id" {
  type = string
}

variable "sg_ids" {
  description = "List of Security Group IDs [frontend, backend, bastion]"
  type        = list(string)
}

variable "key_name" {
  description = "AWS key pair name for SSH access"
  type = string
}