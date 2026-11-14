terraform {
  required_version = ">= 1.3"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Later, move state to S3 for team use:
  # backend "s3" {
  #   bucket         = "my-tf-state-bucket"
  #   key            = "aws-infra/terraform.tfstate"
  #   region         = "ap-south-1"
  #   dynamodb_table = "tf-locks"
  # }
}
