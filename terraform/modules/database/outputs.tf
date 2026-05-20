output "db_private_ip" {
  description = "Private IP of the database EC2 instance"
  value       = aws_instance.db.private_ip
}