variable "vpc_id" {}
variable "my_ip_cidr" {
  description = "Your public IP in CIDR format (for bastion SSH access)"
  type        = string
}