output "sg_ids" {
  value = [
    aws_security_group.frontend_sg.id,
    aws_security_group.backend_sg.id,
    aws_security_group.bastion_sg.id,
    aws_security_group.db_sg.id
  ]
}

output "db_sg_id" {
  value = aws_security_group.db_sg.id
}