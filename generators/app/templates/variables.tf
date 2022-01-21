variable "region" {
  description = "Deployment Region"
  default     = ""
}

variable "aws_profile" {
  description = "Given name in the credential file"
  type        = string
  default     = ""
}

variable "shared_credentials_file" {
  description = "Profile file with credentials to the AWS account"
  type        = string
  default     = ""
}

variable "tags" {
  description = "A map of tags to add to all resources."
  type        = map(string)
  default = {
    application = "generator-terrapro"
    env         = "Test"
  }
}