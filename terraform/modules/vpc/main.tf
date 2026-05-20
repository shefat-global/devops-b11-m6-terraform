# Create VPC
resource "aws_vpc" "this" {
  cidr_block = var.vpc_cidr
  tags = { Name = "my-vpc" }
}

# Create Public Subnets
resource "aws_subnet" "public" {
  for_each             = toset(var.public_subnets)
  vpc_id               = aws_vpc.this.id
  cidr_block           = each.value
  map_public_ip_on_launch = true
  tags = { Name = "public-subnet-${each.key}" }
}

# Create Private Subnets
resource "aws_subnet" "private" {
  for_each   = toset(var.private_subnets)
  vpc_id     = aws_vpc.this.id
  cidr_block = each.value
  tags = { Name = "private-subnet-${each.key}" }
}

# Internet Gateway
resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id
  tags   = { Name = "my-igw" }
}

# Public Route Table
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.this.id
  tags   = { Name = "public-rt" }
}

# Public Route Table Associations
resource "aws_route_table_association" "public_assoc" {
  for_each    = aws_subnet.public
  subnet_id   = each.value.id
  route_table_id = aws_route_table.public.id
}

# Public Route to Internet
resource "aws_route" "public_internet_access" {
  route_table_id         = aws_route_table.public.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.this.id
}

# Elastic IP for NAT Gateway
resource "aws_eip" "nat" {
   # vpc argument removed for provider v5+
    tags = { Name = "nat-eip" }
}

# NAT Gateway in the first public subnet
resource "aws_nat_gateway" "this" {
  allocation_id = aws_eip.nat.id
  subnet_id     = values(aws_subnet.public)[0].id
  depends_on    = [aws_internet_gateway.this]
  tags          = { Name = "nat-gateway" }
}

# Private Route Table
resource "aws_route_table" "private" {
  vpc_id = aws_vpc.this.id
  tags   = { Name = "private-rt" }
}

# Private Route Table Associations
resource "aws_route_table_association" "private_assoc" {
  for_each      = aws_subnet.private
  subnet_id     = each.value.id
  route_table_id = aws_route_table.private.id
}

# Private Route to Internet via NAT
resource "aws_route" "private_nat_access" {
  route_table_id         = aws_route_table.private.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.this.id
}