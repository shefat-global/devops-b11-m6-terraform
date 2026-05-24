# devops-b11-m6-terraform
 3-tier application deployment using terraform, ci/cd pipeline

## Overview
In this project, I recreated the 3-tier application architecture on AWS using Terraform. The setup has:

- **Frontend:** My Next.js application running on a public EC2.
- **Backend:** Laravel API and CMS on a private EC2.
- **Database:** MySQL installed on a private EC2 (RDS was not used due to lab IAM limits).
- **Bastion Host:** Public EC2 for SSH access to private instances.
- **Networking:** VPC with public/private subnets, NAT Gateway, Internet Gateway, and route tables.
- **Security Groups:** Configured for each tier to control access.

This document explains step by step how I set up and deployed the infrastructure using Terraform.

---

## Prerequisites

- AWS account with permissions to create EC2, VPC, NAT, and security groups.
- Terraform >= 1.5.0 installed.
- Git Bash or terminal access.
- AWS CLI configured or access keys ready.
- `shefat-devops.pem` key pair downloaded for SSH.

---

## Project Structure

```
terraform_3tier_project/
├── main.tf
├── variables.tf
├── outputs.tf
├── providers.tf
├── terraform.tfvars
└── modules/
    ├── vpc/
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    ├── database/
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    ├── ec2/
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    └── security-groups/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

---

## Step 1: Set Terraform Variables

I filled in `terraform.tfvars` with the configuration I needed:

```hcl
aws_region               = "ap-southeast-1"
frontend_instance_type    = "t2.xlarge"
backend_instance_type     = "t2.xlarge"
bastion_instance_type     = "t3.micro"
db_instance_type          = "t2.xlarge"
ami_id                    = "ami-0a56f8447277affd8"
my_ip_cidr                = "27.147.204.248/32"
key_name                  = "shefat-devops"
vpc_cidr                  = "10.0.0.0/16"
public_subnets            = ["10.0.1.0/24"]
private_subnets           = ["10.0.2.0/24", "10.0.3.0/24"]
```

- `my_ip_cidr` ensures only my IP can SSH to the bastion.
- `key_name` links to my AWS key pair.

---

## Step 2: Initialize Terraform

```bash
terraform init
```
- This initializes all modules and providers.

---

## Step 3: Plan Deployment

```bash
terraform plan -out=tfplan
```
- I saved the plan so Terraform applies exactly what I reviewed.

---

## Step 4: Apply the Plan

```bash
terraform apply tfplan
```
- All resources (VPC, subnets, NAT, IGW, security groups, EC2 instances) were created.

---

## Step 5: Check Terraform Outputs

```bash
terraform output frontend_public_ip
terraform output backend_private_ip
terraform output db_private_ip
terraform output bastion_public_ip
```
- I used these IPs to connect via SSH.

---

## Step 6: SSH Into Instances

```bash
# Bastion
ssh -i shefat-devops.pem ubuntu@<bastion-public-ip>

# Backend via Bastion
ssh -i shefat-devops.pem ubuntu@<backend-private-ip>

# Database via Bastion
ssh -i shefat-devops.pem ubuntu@<db-private-ip>
```

---

## Step 7: Deploy Applications

- Deployed Next.js on the frontend EC2.
- Deployed Laravel API + CMS on backend EC2.
- Installed MySQL on the private database EC2.
- Configured backend to connect to the database.

---

## Step 8: CI/CD Setup (Optional)

- Set up GitHub Actions to build and deploy frontend and backend automatically on push.
- Stored sensitive environment variables securely.

---

## Step 9: Monitoring (Bonus)

- Optionally, I can set up Grafana to monitor EC2, database, and app metrics.

---

## Best Practices I Followed

- Modular Terraform structure for reuse.
- Dynamic variables in `terraform.tfvars`.
- Bastion host for secure SSH access.
- Private subnets for backend and database.
- Outputs for IPs for easy access.
- Key pair management with `shefat-devops.pem`.

---

## References

- Terraform: https://developer.hashicorp.com/terraform/docs
- AWS EC2: https://docs.aws.amazon.com/ec2/
- Ubuntu Cloud Images: https://cloud-images.ubuntu.com/locator/ec2/

