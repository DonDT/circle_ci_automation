#################################
# s3 resources
#################################

resource "aws_s3_bucket" "film_app_s3_bucket" {
  bucket        = "${local.prefix}-app"
  acl           = "public-read"
  force_destroy = true

  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Sid" : "PublicRedGetObject",
          "Action" : [
            "s3:GetObject"
          ],
          "Effect" : "Allow",
          "Resource" : "arn:aws:s3:::${local.prefix}-app/*",
          "Principal" : "*"
        }
      ]
  })


  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  versioning {
    enabled = true
  }

  tags = local.common_tags
}
