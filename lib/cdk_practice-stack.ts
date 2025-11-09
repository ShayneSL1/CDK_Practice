import { S3 } from 'aws-cdk-lib/aws-ses-actions';
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

interface MyBucketProps {
    bucketName: string;
    versioned: boolean;
    encryption: S3.BucketEncryption;
}

export class CdkPracticeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const bucketProps: MyBucketProps = {
      bucketName: "myS3-Bucket-SS-CDK" + this.account,
      versioned: true,
      encryption: S3.BucketEncryption.S3_MANAGED;
    };

    new S3.bucket(this, "myFirstBucket", bucketProps)
  }
}
