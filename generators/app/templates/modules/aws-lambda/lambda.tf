module "lambda_function" {
  source = "terraform-aws-modules/lambda/aws"
  function_name = <%= lambda_function_name %>