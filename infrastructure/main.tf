provider "aws" {
  region = "eu-north-1"
}

terraform {
  backend "s3" {
    bucket  = "app-film-terraform-state"
    key     = "app-film.tfstate"
    region  = "eu-north-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "Njumbe Donald"
  }
}
