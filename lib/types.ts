// Typescript Types

import { S3Bucket } from "aws-cdk-lib/aws-kinesisfirehose";
import { S3 } from "aws-cdk-lib/aws-ses-actions";

let bucketName: string = 'my-bucket';
let maxItems: number = 100;
let isPublic: Boolean = false;
let tags: string[] = ['project:cdk','env:dev'];

// Typescript Interface
//Interfaces describe objects must have properties defined by the interface

interface MyBucketProps {
    bucketName: string;
    versioned: boolean;
    encryption: S3Bucket;
}